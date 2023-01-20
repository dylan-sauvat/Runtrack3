function fetchData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("nom").value;
    var type = document.getElementById("type").value;
    var output = document.getElementById("output");
    
    fetch('pokemon.json')
      .then(response => response.json())
      .then(data => {
        var filteredData = data.filter(pokemon => {
          if(id && pokemon.id != id) {
            return false;
          }
          if(name && pokemon.name != name) {
            return false;
          }
          if(type != "all" && !pokemon.type.includes(type)) {
            return false;
          }
          return true;
        });
        
        output.innerHTML = "";
        for(var i = 0; i < filteredData.length; i++) {
          output.innerHTML += "<p>" + filteredData[i].name + "</p>";
        }
      });
  }
  