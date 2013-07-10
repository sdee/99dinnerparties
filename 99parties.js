function FirstCtrl($scope) {

  $scope.ideas = [
    {number: 1, name:'Greek', used: false},
    {number: 2, name:'Summer Pasta', used: false},
    {number: 3, name: 'Whiskey', used: false},
    {number: 4, name: 'Southeast Asian', used:  false}
    ];

$scope.tried = 0;
  
  var randomNumber = Math.random();

var r = function(){
    var rando = Math.random();
    return rando;
  }; 

  $scope.ideaCount = function() {
    var count = 0;
    angular.forEach($scope.ideas, function(idea) {
      count +=  1;
    });
    return count;
  };

  $scope.unusedIdeas = function() {
    var unusedIdeas = [];
    angular.forEach($scope.ideas, function(idea) {
      if (idea.used ===false){
        unusedIdeas.push(idea);
      }
    });
    return unusedIdeas;
  };

  $scope.randomIdea = function() {
    var randomIndex = Math.floor(randomNumber*$scope.ideas.length);
    var item = $scope.ideas[randomIndex];
    return item;

  };

  $scope.remainingIdeas = function() {
    var count = 0;
    angular.forEach($scope.ideas, function(idea) {
      if (idea.used===false){
        count +=  1;
      }
    });
    return count;
  };

  $scope.triedIdeas = function(){
    return $scope.tried;
  };

  $scope.resetAll = function(){
    $scope.tried=0;
    angular.forEach($scope.ideas, function(idea) {
      idea.used = false;
    });
  };

  // var delays = [];
  // $scope.random = function(i) {
  //    if(!delays[i]) {
  //     delays[i] = Math.random();
  //   }
  //   return delays[i];
  // };


  $scope.firstUnusedIdea = function(){
    angular.forEach($scope.ideas, function(idea) {
      if (idea.used === false){
        return idea;  
      }
    });
    return null;
  };

  $scope.changeIdea = function(){
    console.log("changeIdea");
    $scope.newIdea = generateNewIdea();
  }

  var generateNewIdea = function(){
    console.log(r()); 
    var item = null;
    var msg ='';
    var line1 = '';
    var line2 = '';
    var line3 = '';
    var currIdeasLeft = $scope.unusedIdeas();
    
    if (currIdeasLeft.length<1){
      msg = "no more values. refreshing";
      $scope.resetAll();
    }  
    else {
      var randomIndex = Math.floor(r()*currIdeasLeft.length);
      console.log(randomIndex);
      var item = currIdeasLeft[randomIndex];
      item.used = true;
      msg = item.name;
    }
    return msg;
  };

  $scope.newIdea = generateNewIdea();
  
}