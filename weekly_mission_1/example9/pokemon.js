class Pokemon {
    constructor (name) {
      this.name = name
    }

    // Esta es una función que no recibe parametro
    sayHello = () => {
    console.log(`Mi pokemon` + ' ' + this.name + ' ' + `te saluda`)
  }
  
  // Esta es una función que recibe parametro
    sayMessage = (message) => {
    console.log(`Mi pokemon` + ' ' + this.name + ' ' + `dice: ${message}`)
  }

}
  
// Esta clase se exporta en este módulo
module.exports = Pokemon