const BusStop = function(name){
    this.name = name
    this.queue = []
}
BusStop.prototype.addToQueue = function(person){
    this.queue.push(person)
    console.log(`${person.name} joined the queue...`)

}

module.exports = BusStop