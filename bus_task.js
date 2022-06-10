const Bus = require('./bus')
const Person = require('./person')
const BusStop = require('./bus_stop')

const redBus = new Bus('22','London')

const stop_01 = new BusStop('The Mitre')

// console.log(redBus)
// console.log(redBus.howManyPassengers())
// redBus.drive()
// console.log(redBus)


const shaggy = new Person('Shaggy', 30)
const scooby = new Person('Scooby', 20)
const velma = new Person('Velma', 25)
const fred = new Person('Fred', 28)
const daphney = new Person('Daphney', 26)
//console.log(shaggy)

let people = [shaggy,scooby,velma,fred,daphney]

for (i of people){
    stop_01.addToQueue(i)
}

redBus.pickUpFromStop(stop_01)
console.log(redBus.passengers)
redBus.empty()
console.log(redBus.passengers)