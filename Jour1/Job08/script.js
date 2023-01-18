var sommenombrespremiers = function(a, b) {
    if(isPrime(a) && isPrime(b)){
      return a + b;
    } else {
      return false;
    }
  };
  
  function isPrime(num){
    for(let i=2; i<=Math.sqrt(num); i++){
      if(num % i === 0) return false;
    }
    return num !== 1;
  }
  