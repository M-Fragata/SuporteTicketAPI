import { createTicketsController } from "../controllers/tickets/create.js"

import { listTicketsController } from "../controllers/tickets/list.js"

export const tickets = [
    {
        method: "POST",
        path: "/tickets",
        controller: createTicketsController //controller passando a req e res para o ticketsController

    },
    {
        method: "GET",
        path: "/tickets",
        controller: listTicketsController
    }
]