let rp = require('request-promise')
function main(params){
const options = {
    uri: "https://api.the"+encodeURIComponent(params.object_pet) + "api.com/v1/images/"+ encodeURIComponent(params.object_search),
    json: true,
    
}
return rp(options)
.then(res => {
    return { extract : res }
})
}