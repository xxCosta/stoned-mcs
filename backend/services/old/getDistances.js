const {Client} = require("@googlemaps/google-maps-services-js");
const axios = require('axios')

async function getDistances (fastify, options) {
  fastify.get('/getDist', async (request, reply) => {
    const {redis} = fastify
    await axios.get('http://localhost:8080/popDB')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      
    let longNameAddy = []
    const allAddys = await redis.lrange("all-addys", 0, -1)
 
    await allAddys.forEach(element => {
      longNameAddy.push(`${element}, ottawa, ontario`)      
    });
    

    const client = new Client({})
    const gcode = async(addy) =>  { 
      const args = {
        params: {
          key: process.env.MAPS_API,
          address: '130 hawthorne ave, ottawa, ontario',
        },
        params: {
          key: process.env.MAPS_API,
          address: '65 lotta ave, ottawa, ontario'
        }
      }
       
      await client.geocode(args)
        .then(r =>{
          reply.send(JSON.stringify(r.data.results))
        })
        .catch(e => console.log(e))
       }


    gcode()
    // await longNameAddy.forEach(element =>{
    //   gcode(element)
    // })
       
    //reply.send("test")

    
    const matrixArgs = {
    }
    //await client.distancematrix(matrixArgs)
  
      
  })

}

module.exports = getDistances