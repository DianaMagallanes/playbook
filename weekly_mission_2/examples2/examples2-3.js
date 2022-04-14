// Ejemplo 3: Instanciar un objeto con atributos
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }

  const studentData = new Student('diana',28,'Spanish, Mathematics') 
  console.log(studentData)