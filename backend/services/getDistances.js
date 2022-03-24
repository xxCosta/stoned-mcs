const {Client} = require("@googlemaps/google-maps-services-js");
const axios = require('axios')

async function getDistances (fastify, options) {
     fastify.get('/getDistances', async(req,reply) => {
          return "sup dawg" 
        }) 
    }

module.exports = getDistances










