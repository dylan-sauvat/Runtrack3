<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour08 - Job02 - Tailwind header</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>

    <header>
        <nav class="bg-indigo-500 text-white text-center p-4">
            <ul class="inline-flex">
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Accueil</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Inscription</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Connexion</a></li>
                <li class="mr-6"><a href="index.php" class="text-indigo-200 hover:text-white">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h1>Traitement du header menu avec le Framework Tailwind</h1>
            <p>Reprenez votre fichier index.php. Incluez le CDN de Tailwind, ou installez le framework dans votre projet en utilisant la CLI Tailwind. Sans utiliser de fichier css, ajouter des classes tailwind à votre header de sorte à ce qu’il soit coloré et aligné.</p>
            <br><br>
            <form>
                <div>
                    <label for="civility">Civilité:</label>
                    <input type="radio" id="civility" name="civility" value="Monsieur"> Monsieur
                    <input type="radio" id="civility" name="civility" value="Madame"> Madame
                </div>
                <div>
                    <label for="first-name">Prénom:</label>
                    <input type="text" id="first-name" name="first-name">
                </div>
                <div>
                    <label for="last-name">Nom:</label>
                    <input type="text" id="last-name" name="last-name">
                </div>
                <div>
                    <label for="address">Adresse:</label>
                    <input type="text" id="address" name="address">
                </div>
                <div>
                    <label for="email">Adresse email:</label>
                    <input type="email" id="email" name="email">
                </div>
                <div>
                    <label for="password">Mot de passe:</label>
                    <input type="password" id="password" name="password">
                </div>
                <div>
                    <label for="password-confirm">Confirmez le mot de passe:</label>
                    <input type="password" id="password-confirm" name="password-confirm">
                </div>
                <div>
                    <label>Vos passions:</label>
                    <input type="checkbox" id="passion-1" name="passion" value="informatique"> Informatique
                    <input type="checkbox" id="passion-2" name="passion" value="voyages"> Voyages
                    <input type="checkbox" id="passion-3" name="passion" value="sport"> Sport
                    <input type="checkbox" id="passion-4" name="passion" value="lecture"> Lecture
                </div>
                <div>
                    <input type="submit" value="Valider">
                </div>
            </form>
    </main>

    <footer>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="index.php">Inscription</a></li>
                <li><a href="index.php">Connexion</a></li>
                <li><a href="index.php">Rechercher</a></li>
            </ul>  
        </nav>
    </footer>

</body>
</html>