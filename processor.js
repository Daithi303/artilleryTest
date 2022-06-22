// The JS file is expected to be a standard Node.js module:

module.exports = {
    beforeRequestHandler (requestParams, context, ee, next) {
      return next() // Must be called for the scenario to continue
    },
    afterResponseHandler (requestParams, response, context, ee, next) {
        // add a length field to the response body
        // body=JSON.parse(response.body);
    //    console.log(`response body : ${response.body}`)
    //    console.log(`response body length : ${body.length}`)
    console.log(`this is the afterResponseHandler`)
      return next() // Must be called for the scenario to continue
    }
  }