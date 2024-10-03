import { Router } from 'express'

import { sessionsRoutes } from './sessions.routes.js'
import { usersRoutes } from './users.routes.js'
import { notesRoutes } from './notes.routes.js'
import { tagsRoutes } from './tags.routes.js'


export const routes = Router()

routes.use("/sessions", sessionsRoutes)
routes.use("/users", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)


