function scuberGreetingForFeet(){
      var returnResponse = "";
  function scuberGreetingForFeet(distanceInFeet){
    if (distanceInFeet > 2500) {
  returnResponse = 'No.';
  }
  else if (distanceInFeet > 2000) {
  returnResponse = 'I will gladly take your thirty bucks.';
  }
  else if (distanceInFeet <= 400) {
  returnResponse = 'Free Ride!';
  }
  return returnResponse;
  }
    function ternaryCheckCity(city){
  // Write your code here!
  cityName === 'NYC' ? returnResponse = 'Ok, sounds good.' : returnResponse = 'No go.';
  return returnResponse;
  }
     function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  } 
  switch (tipAmount) {
     case 'generous' : returnResponse = 'Thank you so much.'; break;
      case 'not as generous': returnResponse = 'Thank you.'; break;
        default : returnResponse = 'Bye.';
          return returnResponse;
  }
  }