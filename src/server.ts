import fastify from "fastify"
import { request } from "http";
 

const server = fastify({logger:true});

const teams = [
    {id:1 , name:"McLaren", base:"Reino unido"},
    {id:1 , name:"Mercedes", base:"Reino unido"},
    {id:1 , name:"Red Bull", base:"Reino unido"}
]

server.get("/teams", async (request , response)=>{
    response.type("application/json").code(200)
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return [
        {id:1 , name:"Max Verstappen", team:"Red Bull"}
    ];
})

server.listen({port:3333},()=> {
    console.log("server init");
});