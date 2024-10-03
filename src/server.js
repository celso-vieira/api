import 'dotenv/config'
import 'express-async-errors'
import express from 'express'

import cors from 'cors'

import migrationsRun from './database/sqlite/migrations/index.js'

import { AppError } from './utils/AppError.js'
import { UPLOADS_FOLDER } from './configs/upload.js'

//não seria necessário colocar o /index.js, ele iria direto
import { routes } from './routes/index.js'

migrationsRun()

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)

app.use("/files", express.static(UPLOADS_FOLDER))

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            mensagem: error.message 
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        mensagem: "Internal Server Error"
    })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
