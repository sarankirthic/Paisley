const SubscribersHandler = require('./classes/SubscribersHandler.js')
const main = SubscribersHandler.init()
main.start().then(r => console.log(r)).catch(e => console.log(e))
