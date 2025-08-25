import fastify from "fastify"
import { request } from "http";
 

const server = fastify({logger:true});

const teams = [
    {id:1 , name:"McLaren", base:"Reino unido"},
    {id:1 , name:"Mercedes", base:"Reino unido"},
    {id:1 , name:"Red Bull", base:"Reino unido"}
];

const drivers = [
    {id:1 , name:"Max Verstappen", team:"Red Bull"},
    {id:1 , name:"Lewis Hamilton", team:"ferrari"},
]

server.get("/teams", async (request , response)=>{
    response.type("application/json").code(200)
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return [drivers];
})

interface DriversParams{
    id:string
}

server.get<{Params:DriversParams}>("/drivers/:id", async (request , response) =>{
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {message:"Driver not Found"}
    }else{
        response.type("application/json").code(200);
        return {driver}
    }
})

server.listen({port:3333},()=> {
    console.log("server init");
});