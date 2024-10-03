import { connection } from "../database/knex/index.js"
const knex = connection

import crypts from 'bcryptjs'
const { compare } = crypts
import { AppError } from "../utils/AppError.js"

import tokens from "jsonwebtoken"
const { sign } = tokens
import authConfig from "../configs/auth.js"


export class SessionsController {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first()

        if (!user) {
            throw new AppError("E-mail e/ou senha incorreta", 401) 
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            throw new AppError("E-mail e/ou senha incorreta", 401)
        }

        const { secret, expiresIn } = authConfig.jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token })
    }
}