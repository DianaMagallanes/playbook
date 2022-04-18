const user  = {
    user: "DianaM",
    username: "DianaM",
    bio: "Frase interesante para tu biografía",
    dateCreation: "17/04/2022",
    qtyFollows:200,
    qtyFollowers:500,   
    getGeneralInfo: function(){
      return `This user: ${this.user}, with the username: ${this.username} follows ${this.qtyFollows} accounts.`
    }
   }
   
   console.log("Username: " + user.user)
   console.log(user.getGeneralInfo())


   const trending_topic  = {
    name: "Coachella",
    qtyTweets: "50000",
    dateCreation: "17/04/2022",
    
    getGeneralInfo: function(){
      return `Trending topic: ${this.name}, was created in ${this.dateCreation} and has ${this.qtyTweets} tweets.`
    }
   }

   console.log("Trending topic: " + trending_topic.name)
   console.log(trending_topic.getGeneralInfo())

  
   const hashtag  = {
    name: "#FelizDomingo",
    qtyTweets: "120000",
    dateCreation: "17/04/2022",
    
    getGeneralInfo: function(){
      return `Hashtag: ${this.name}, was created in ${this.dateCreation} and has ${this.qtyTweets} tweets.`
    }
   }

   console.log("Hashtag: " + hashtag.name)
   console.log(hashtag.getGeneralInfo())