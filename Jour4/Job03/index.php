<!DOCTYPE html>
<html>
<head>
  <title>Pokemon</title>
  <script src="script.js"></script>
</head>
<body>
  <form>
    <label for="id">Id:</label>
    <input type="text" id="id" name="id">
    <br>
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom">
    <br>
    <label for="type">Type:</label>
    <select id="type" name="type">
      <option value="Normal">Normale</option>
      <option value="Flying">Volant</option>
      <option value="Poison">Poison</option>
      <option value="Ground">Terre</option>
      <option value="electric">Electrique</option>
      <option value="Fairy">Féerique</option>
      <option value="Grass">Herbe</option>
      <option value="Dragon">Dragon</option>
      <option value="Bug">Insect</option>
      <option value="Psychic">Psychique</option>
      <option value="Ghost">Famtôme</option>
      <option value="Rock">Pierre</option>
      <option value="Fighting">Combatant</option>
      <option value="Ice">Glace</option>
      <option value="Fire">Feu</option>
      <option value="Steel">Métal</option>

    </select>
    <br><br>
    <input type="button" value="Filtrer" onclick="fetchData()">
  </form>
  <div id="output"></div>
</body>
</html>
