/*function scuberGreetingForFeet(){
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
  }*/
  function scuberGreetingForFeet(feet){
    if (feet <= 400){
      return 'This one is on me!';
    }
    else if (feet > 400 && feet < 2000){
      return 'That will be twenty bucks.'
    }
    else if (1999 < feet && feet < 2500){
      return 'I will gladly take your thirty bucks.'
    }
    else{
      return 'No can do.'
    }
  }
  function ternaryCheckCity(city){
    // Write your code here!
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  }
  function switchOnCharmFromTip(tip){
    // Write your code here!
    switch(tip){
      case 'generous':
        return "Thank you so much.";
      case 'not as generous':
        return 'Thank you.'
      default:
        return 'Bye.'
    }
  }
    