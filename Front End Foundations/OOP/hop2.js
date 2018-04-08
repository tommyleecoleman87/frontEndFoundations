class Stadium {
    constructor(name, city, capacity, sport, ticketsSold) {
        this.name = name;
        this.city = city;
        this.capacity = capacity;
        this.sport = sport;
        this.ticketsSold = ticketsSold;
    }

    describeStadium () {
        console.log(`The ${this.name} is in ${this.city} and holds ${this.capacity} people.`);
    }

    sportPlayed() {
        console.log(`The following sport is mainly played in this stadium: ${this.sport}`);
    }

    seatsAvailable() {
        let seats = this.capacity - this.ticketsSold;
        console.log(`There are ${seats} seats still availablef for tonight's game`);
    }
}

let stadium1 = new Stadium('Mercedes Benz Arena', 'Atlanta', 70000, "Football", 55000);
console.log(stadium1.describeStadium());
console.log(stadium1.sportPlayed());
console.log(stadium1.seatsAvailable());