export function updateStatusTicketsController(req, res, database) {
    const { id, status } = req.params

    const { ...body } = req.body

    database.updateStatus("tickets", id, status, body)

    return res
        .writeHead(200)
        .end()
}