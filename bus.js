const Bus = function(routeNumber, destination){
    this.routeNumber = routeNumber
    this.distance = 0
    this.destination = destination
    this.passengers = []
}

Bus.prototype.drive = function(){
    this.distance += 10
}

Bus.prototype.howManyPassengers = function(){
    number = this.passengers.length
    return number
}

//Bus.pick_up(passenger1)

Bus.prototype.pickUp = function(person){
    this.passengers.push(person)
}

Bus.prototype.dropOff = function(person){
    let index = this.passengers.indexOf(person)
    if (index > -1) {
        this.passengers.splice(index,1)
    }

}

Bus.prototype.empty = function(){
    this.passengers = []
    console.log('Everyone got off the bus', this.passengers)
}


Bus.prototype.pickUpFromStop = function(stop){
    for (let person of stop.queue){
        this.pickUp(person)
        console.log(`${person.name} got on the bus...`)
    stop.queue = []
    }
}



module.exports = Bus
