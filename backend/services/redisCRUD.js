async function redisCRUD (fastify,options) {
    fastify.get('/rCRUD',(req,reply) =>{
        return "got it" 
    })
}

module.exports = redisCRUD
