import { registerUser } from '../database/insertion.js'
import { validationDoubleEmail, selectHash } from '../database/select.js'
import { encryptPassword, comparePassword } from '../utills/encrypt.js'
import jwt from 'jsonwebtoken'
import transport from '../email.js'
import fs from 'fs/promises'
import handlebars from 'handlebars'

const registerUsers = async (req, res) => {
  const { username, password, email } = req.body
  try {
    const doubleEmail = await validationDoubleEmail(email)
    if (doubleEmail) {
      return res.status(400).json({ message: 'This email has already been registered' })
    }
    const passwordEncrypt = await encryptPassword(password)
    const result = await registerUser(username, email, passwordEncrypt)

    const readHTML = await fs.readFile('./src/templates/register.html')

    const compiled = handlebars.compile(readHTML.toString())
    const htmlString = compiled({
      username
    })

    transport.sendMail({
      from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
      to: `${username} <${email}>`,
      subject: 'Cadastro Realizado com Sucesso na TodoList',
      html: htmlString
    })

    res.status(201).json(result.rows[0])
  } catch (err) {
    return res.status(500).json({ message: 'internal server error' })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    if (!password || !email) {
      return res.status(400).json({ message: 'All fields are mandatory' })
    }

    const doubleEmail = await validationDoubleEmail(email)
    if (!doubleEmail) {
      return res.status(400).json({ message: 'Invalid username and/or password(s).' })
    }

    const { password_hash: hash, ...user } = await selectHash(email)
    const passwordAproved = await comparePassword(password, hash)
    if (!passwordAproved) {
      return res.status(400).json({ message: 'Invalid username and/or password(s).' })
    }
    const token = await jwt.sign({ id: user.user_id }, process.env.JWT_PASS, { expiresIn: '8h' })

    return res.status(200).json({ user, token })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'internal server error' })
  }
}

export {
  registerUsers,
  loginUser
}
