import app from "./app";

const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
console.log(`API REST corriendo en puerto ${PORT}`);
})

import { connect } from 'mqtt';
// var mqtt = require('mqtt')
var client  = connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
    console.log('Mqtt connected.')
    client.subscribe('nodejsfer', function (err) {
        if (err) {
            console.log('Ocurrio un error al suscribir.')
        // client.publish('nodejsfer', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
//   client.end()
})