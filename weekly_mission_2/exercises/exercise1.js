const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   
   
   
   const issue = {
    title: "Bug exotico",
    repositoryNameAssociated: "Playbook",
    status: "Working",
    numberOfComments: 10,
    labels: "JS, NodeJS",
    author: "Diana Magallanes",
    dateCreated: "11-04-2022",
    lastUpdated: "14-04-2022",
    getTitleAndAuthor: function(){
      return `This repository ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `\n Date of Creation: ${this.dateCreated} \n Status(${this.status}). \n The number of comments are: ${this.numberOfComments}`
    }
   }

   console.log("Name of issue: " + issue.title)
   console.log("Information: " + issue.getTitleAndAuthor())
   console.log("Data: " +issue.getGeneralInfo())



   const pullRequest = {
    title: "Magic Update",
    branchName: "Main",
    dateCreated: "11-04-2022",
    status: "OK",
    repositoryNameAssociated: "Playbook",
    getTitleAndRepository: function(){
      return `This PR, ${this.title} is of ${this.repositoryNameAssociated}`
    },
    getStatus: function(){
      return `Status(${this.status}).`
    }
   }

   console.log("Name of Pull Request: " + pullRequest.title)
   console.log("Information: " + pullRequest.getTitleAndRepository())
   console.log("Status of PR: " +pullRequest.getStatus())