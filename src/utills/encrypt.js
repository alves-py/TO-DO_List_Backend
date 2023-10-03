import bcrypt from 'bcrypt'

const encryptPassword = (password) => {
  return bcrypt.hash(password, 10)
}

const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash)
}

export {
  encryptPassword,
  comparePassword
}
