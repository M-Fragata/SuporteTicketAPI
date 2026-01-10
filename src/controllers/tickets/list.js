export function listTicketsController(req, res, database) {
    const ticketsList = database.select("tickets")

    return (
        res
            .writeHead(200)
            .end(JSON.stringify(ticketsList))
    )
}