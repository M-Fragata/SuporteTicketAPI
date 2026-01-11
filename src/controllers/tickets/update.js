export function updateTicketsController(req, res, database) {
    const { id } = req.params

    if (!id) {
        id = null
    }

    const { ...body } = req.body
    const update = {
        ...body,
        updated_at: new Date().toLocaleString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    }

    const updateTicket = database.update("tickets", id, update)

    return res
        .writeHead(200)
        .end()
}