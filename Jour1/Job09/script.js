function tri(numbers, order) {
    if(order === "asc"){
      return numbers.sort(function(a,b){
        return a-b;
      });
    } else if(order === "desc") {
      return numbers.sort(function(a,b){
        return b-a;
      });
    } else {
      return "Invalid order parameter";
    }
  }
  