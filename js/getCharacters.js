console.log('Estamos en get characters');

button.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api') // debemos agregar el endpoint de la api
        .then(function (response) { //resuelve la promesa
            return response.json();
        })
        .then((characters) => {
            console.log(characters.results);
            let arrayOfCharacters = characters.results;

            arrayOfCharacters.forEach(function (character) { // Recorremos los personajes
                root.innerHTML += '<article><img src="' + character.image + '" alt=""><p>' + character.name + '</p></article>'
            })
        }) //procesa los datos
        .catch(error => console.log(error))
});