const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

//PUNTO 1
console.log("Nombre explorers")
explorers.forEach(explorer => console.log(explorer.name))

//PUNTO2
console.log("Stack explorers")
explorers.forEach(explorer => console.log(`Explorer name: ${explorer.name} - Stack ${explorer.stack}`))

//PUNTO 3
console.log("Lista Stack")
const stackList = explorers.map((explorer) => explorer.stack)
console.log(stackList)

//PUNTO 4
console.log("Explorers with js stack")
const explorersJS = explorers.find((explorer) => explorer.stack.includes("js"))
console.log(explorersJS)

//PUNTO 5
console.log("Explorers from CDMX")
const explorersFromCDMX = explorers.filter((explorer) => explorer.city=="CDMX")
console.log(explorersFromCDMX)

//PUNTO 6
console.log("Qty exercises_completed")
const qty= explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(qty)

//PUNTO 7
console.log("Someone Completed FrontEnd Exercises?")
const areSomeTrue = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log(areSomeTrue)

//PUNTO 8
console.log("Everyone Finished Onboarding?")
const areEveryTrue = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished === true)
console.log(areEveryTrue)