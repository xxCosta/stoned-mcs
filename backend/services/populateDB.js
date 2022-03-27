const axios = require('axios')
const { values } = require('lodash')
const _ = require('lodash')

async function populateDB (fastify,options){
    fastify.get('/popDB', async (req,reply) =>{
        const { redis } = fastify
        let addys = []
        let crews = 4
        let jobsPerCrew= 4
        await axios.get('https://maps.ottawa.ca/arcgis/rest/services/Municipal_Address/MapServer/0/query?where=1%3D1&outFields=FULLADDR&outSR=4326&f=json')
            .then(function (response) {
                let r = response.data.features;
                r.forEach(element => {
                    addys.push(element.attributes.FULLADDR)
                });
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {                
                let randomAddys = _.sampleSize(addys,crews*jobsPerCrew)
                redis.lpush("all-addys", randomAddys, (err, val) =>{
                    reply.send(err || `there are currently ${val} addys in the database`)
                })       
            });
    })

}

module.exports = populateDB