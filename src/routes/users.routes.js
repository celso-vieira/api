//const { Router } = require('express')
import { Router } from 'express'
import multer from 'multer'
import { MULTER } from '../configs/upload.js'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js'

export const usersRoutes = Router()

const upload = multer(MULTER)

import { UsersController } from '../controllers/UsersController.js'
import { UserAvatarController } from '../controllers/UserAvatarController.js'

// function myMiddleware(request, response, next) {
//     console.log('Passando pelo middleware')

//     if(!request.body.isAdmin) {
//         return response.json({ mensagem: 'Usuário não autorizado'})
//     }

//     next()
// }


const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single("avatar"), userAvatarController.update)


//module.exports = usersRoutes