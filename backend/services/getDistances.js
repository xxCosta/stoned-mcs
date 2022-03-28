const {Client} = require("@googlemaps/google-maps-services-js");
const axios = require('axios')

async function getDistances (fastify, options) {
  fastify.get('/getDist', async (request, reply) => {
    
    const args = {
      params: {
        key: process.env.MAPS_API,
        address: '130 Hawthorne Avenue, Ottawa, Ontario',
      }
    }
    
    const client = new Client({})
    await client.geocode(args)
      .then(r =>{
        reply.send(JSON.stringify(r.data.results))
      })
      .catch(e => console.log(e))
    
    const matrixArgs = {
    }
    await client.distancematrix(matrixArgs)
  
      
  })

}

module.exports = getDistances