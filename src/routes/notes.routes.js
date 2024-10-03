//const { Router } = require('express')
import { Router } from 'express'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js'

export const notesRoutes = Router()

import { NotesController } from '../controllers/NotesController.js'

// function myMiddleware(request, response, next) {
//     console.log('Passando pelo middleware')

//     if(!request.body.isAdmin) {
//         return response.json({ mensagem: 'Usuário não autorizado'})
//     }

//     next()
// }


const notesController = new NotesController()

notesRoutes.post('/', ensureAuthenticated, notesController.create)
notesRoutes.get('/:id', ensureAuthenticated, notesController.show)
notesRoutes.delete('/:id', ensureAuthenticated, notesController.delete)
notesRoutes.get('/', ensureAuthenticated, notesController.index)
