

var result="";
var minor=0;
var friendsArray= require("../data/friends.js");


module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
      });
      


      //here is the logic that handles the compatibility
      app.post("/api/friends", function(req, res) {
        
        var a;
        var b;
        var newFriend = req.body;
        var n=0
        var result1=0;
        var m=0;
        var arrayResults=[];

        var finalmatch;
       
            //loop a todo friendsarray
        for(var j=0; j<friendsArray.length; j++){

        for(var i=0; i<friendsArray[j].scores.length; i++){

          var score1= Number(newFriend.scores[i]);
          var score2 = Number(friendsArray[j].scores[i]);
          var compare1 = Math.abs(score1-score2);
          result1= result1+compare1;
         // console.log("comparing "+newFriend.name+ " "+ score1 +" with: "+ friendsArray[j].name+" "+ " with "+ score2);
        }
        arrayResults.push(result1);
        result1=0;
      }
      console.log("array of results is: "+ arrayResults);
      friendsArray.push(req.body);
    

      var min_of_array = Math.min.apply(Math, arrayResults);
      console.log(min_of_array);
         
      for(var i=0; i<arrayResults.length; i++){
              if(arrayResults[i]===min_of_array){
                minor=i
              }
          }

              //console.log(friendsArray);
              console.log(minor);
              result= friendsArray[minor];
            //console.log(result);
        res.json(result)

      })
    }