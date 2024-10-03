import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'path'



export default async function sqliteConnection() {
    const database = await open({
        filename: path.resolve(import.meta.dirname, "..", "database.db"),
        driver: sqlite3.Database
    })

    return database
}
