
import { createTicketsController } from "../controllers/tickets/create.js"
import { listTicketsController } from "../controllers/tickets/list.js"
import { updateTicketsController } from "../controllers/tickets/update.js"
import { updateStatusTicketsController } from "../controllers/tickets/updateStatus.js"
import { deleteTicketsController } from "../controllers/tickets/delete.js"


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
    },
    {
        method: "PUT",
        path: "/tickets/:id",
        controller: updateTicketsController
    },
    {
        method: "PATCH",
        path: "/tickets/:id/:status",
        controller: updateStatusTicketsController
    },
    {
        method: "DELETE",
        path: "/tickets/:id",
        controller: deleteTicketsController
    }
]