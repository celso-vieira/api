import { Router } from 'express'

export const tagsRoutes = Router()

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.js";

import { TagsController } from '../controllers/TagsController.js'

const tagsController = new TagsController()

tagsRoutes.get('/', ensureAuthenticated, tagsController.index)
