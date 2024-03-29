import { selectAllUserId } from '../database/select.js'
import jwt from 'jsonwebtoken'

import 'dotenv/config.js'

const nameEmailPass = (req, res, next) => {
  const { username, email, password } = req.body
  if (!username || !password || !email) {
    return res.status(400).json({ mensage: 'All fields are mandatory' })
  }
  next()
}

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ mensage: 'To access this feature a valid authentication token must be sent.' })
  };
  try {
    const token = authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_PASS)
    const { rows, rowsCount } = await selectAllUserId(id)

    if (rowsCount === 0) {
      return res.status(401).json({ mensage: 'To access this feature a valid authentication token must be sent.' })
    }

    const { password_hash, ...user } = rows[0]
    req.user = user
    next()
  } catch (error) {
    return res.status(401).json({ mensage: 'To access this feature a valid authentication token must be sent.' })
  };
}

const validationNameColor = (req, res, next) => {
  const { name, color } = req.body

  if (!name || !color) {
    return res.status(400).json({ message: 'All fields are mandatory' })
  }

  next()
}

export {
  nameEmailPass,
  tokenValidation,
  validationNameColor
}
