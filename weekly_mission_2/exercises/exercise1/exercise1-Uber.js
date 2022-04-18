const profile  = {
    username: "DianaM",
    carModel: "Tesla X",
    carPlate: "QWERTY123",
    qtyTrips:2345,
    rating:5,  
    years:2, 
    getGeneralInfo: function(){
      return `This user: ${this.username}, has a: ${this.carModel} car with car plate ${this.carPlate}.`
    }
   }
   
   console.log("Username: " + profile.username)
   console.log(profile.getGeneralInfo())

   const travel  = {
    from: "Work",
    to: "Home",
    distance: "10 km.",
    price:"$100.00",
    estimatedTime:"15 min.",  
    getGeneralInfo: function(){
      return `Travel from: ${this.from} to ${this.to} has a cost of: ${this.price}.`
    }
   }
   
   console.log("Estimated time: " + travel.estimatedTime)
   console.log(travel.getGeneralInfo())