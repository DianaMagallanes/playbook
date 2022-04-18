const user  = {
    userUrl: "https://www.facebook.com/dianaM",
    username: "DianaM",
    qtyFriends: "500",
    dateCreation: "17/04/2022",
    works:"Facebook",
    lives:"Space",   
    getGeneralInfo: function(){
      return `This user: ${this.username}, with the account: ${this.userUrl} has ${this.qtyFriends} friends.`
    }
   }
   
   console.log("Username: " + user.username)
   console.log(user.getGeneralInfo())

   const post  = {
    userCreator: "DianaM",
    location: "Space",
    description: "Look at the beatiful stars in the sky*",
    imageUrl:"https://www.todofondos.net/wp-content/uploads/mas-de-76-fondos-de-pantalla-de-space-stars.-imagen-de-estrellas-1024x620.jpg",
    dateCreation:"17/04/2022",  

    getGeneralInfo: function(){
      return `Post created by: ${this.userCreator}, with this description: ${this.description} on ${this.dateCreation}.`
    }
   }
   
   console.log("Post Location: " + post.location)
   console.log(post.getGeneralInfo())


   const storie  = {
    userCreator: "DianaM",
    imageVideoUrl:"https://www.todofondos.net/wp-content/uploads/mas-de-76-fondos-de-pantalla-de-space-stars.-imagen-de-estrellas-1024x620.jpg",
    dateCreation:"17/04/2022",    
    caption:"Beatiful pic",
    getGeneralInfo: function(){
      return `Storie created by: ${this.userCreator}, with this image: ${this.imageVideoUrl} on ${this.dateCreation}.`
    }
   }

   console.log("Storie created by: " + storie.userCreator)
   console.log(storie.getGeneralInfo())
