import jwt from 'jsonwebtoken'
const bcrybt = require('bcrypt')
const dotenv = require('dotenv');

dotenv.config();

export default class token{
     tokenGenerated = jwt.sign
}

