// class Vacation {
//     constructor(destination, length) {
//         this.destination = destination;
//         this.length = length;
//     }
    
//  print() {
//         console.log(`${this.destination} | ${this.length}`)
//     }
//  }
 

// const trip=new Vacation('chile', 7)
// console.log(trip.print())


// class Expedition extends Vacation {
//     constructor(destination, length, gear) {
//         super(destination, length)
//         this.gear = gear
//     }
//     print() {
//         super.print()
//         console.log(`Bring your ${this.gear.join(" and your ")}`)
//     }
//  }
//  const trip=new Expedition('dixi',3,['sunglasess','camera']);
//  trip.print()
 
const morning = {
    breakfast: "Ham and eggs",
    lunch: "Burger"
 }
 
 const dinner = "Fish"
 
 const backpackingMeals = {
    ...morning,
    dinner
 }
 
 console.log(backpackingMeals)