import { randomUUID } from "node:crypto"

export function createTicketsController(req, res, database) {
    const { equipment, description, user_name } = req.body

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        status: "open",
        created_at: new Date().toLocaleString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }),
        updated_at: new Date().toLocaleString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }),
    }

    database.insert("tickets", ticket)

    return res
        .writeHead(201)
        .end(JSON.stringify(ticket))

}