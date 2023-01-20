function updateUsers() {
    var table = document.getElementById("user-table");
  
    // Récupérer les utilisateurs à partir de la page PHP
    fetch("users.php")
      .then(response => response.json())
      .then(data => {
        // Effacer les lignes existantes du tableau
        while(table.rows.length > 1) {
          table.deleteRow(1);
        }
  
        // Ajouter les utilisateurs au tableau
        for(var i = 0; i < data.length; i++) {
          var row = table.insertRow();
          var idCell = row.insertCell(0);
          var nameCell = row.insertCell(1);
          var prenomCell = row.insertCell(2);
          var emailCell = row.insertCell(3);
          idCell.innerHTML = data[i].id;
          nameCell.innerHTML = data[i].nom;
          prenomCell.innerHTML = data[i].prenom;
          emailCell.innerHTML = data[i].email;
        }
      });
  }
  