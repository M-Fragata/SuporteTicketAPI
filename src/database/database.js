import fs from 'node:fs/promises'

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, "utf-8")
            .then((data) => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()
    }

    select(table, filters) {
        let data = this.#database[table] ?? []

        let filter = filters ? data = data.filter((row) => {
            return Object.entries(filters).some(([key, value]) => {
                return row[key].toLowerCase().includes(value.toLowerCase())
            })
        }) : data

        return filter
    }

    update(table, id, update) {

        let data = this.#database[table].map((ticket) => {
            if (ticket.id === id) {
                return ticket = {
                    ...ticket,
                    ...update
                }
            }
            return ticket
        }) ?? []

        this.#database[table] = data
        this.#persist()

        return data
    }

    updateStatus(table, id, status, body) {
        let data = this.#database[table].map((ticket) => {
            if (ticket.id === id) {
                return {
                    ...ticket,
                    status: status,
                    ...body
                }
            }
            return ticket
        })

        this.#database[table] = data
        this.#persist()

        return data
    }

    delete(table, id) {


        const ticketIndex = this.#database[table].findIndex((ticket) => {
            if (ticket.id === id) {
                return ticket
            }
        })

        this.#database[table].splice(ticketIndex, 1)
        this.#persist()

        return ticketIndex

    }

}