export function listTicketsController(req, res, database) {


    const { status } = req.query

    const filters = status ? { status } : null
    
    const ticketsList = database.select("tickets", filters)
    return (
        res
            .writeHead(200)
            .end(JSON.stringify(ticketsList))
    )
}