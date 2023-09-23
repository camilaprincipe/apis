// darle funcionalidad al botón para que cargue a los personaes cuando se hace click
        document.addEventListener("DOMContentLoaded", function() {
           
            personajeRandom();
            const btn = document.getElementById("random");
            btn.addEventListener('click', personajeRandom);
          });
        
            function personajeRandom () { 
            const url = 'https://harry-potter-api.onrender.com/personajes';
        
        
            // Realizar una solicitud GET a la API
        fetch(url)
            .then(response => {
                // Verificar si la respuesta es exitosa (código de estado 200)
                if (response.status === 200) {
                    // Convertir la respuesta JSON en un objeto JavaScript
                    return response.json();
                } else {
                    // En caso de un error, manejarlo adecuadamente
                    throw new Error('No se pudo obtener la información');
                }
            })
            .then(data => {
                // Obtener un personaje aleatorio de la lista de personajes

                const randomCharacter = data[Math.floor(Math.random() * data.length)];

                // Mostrar los datos del personaje en la página HTML

                const characterImage = document.getElementById('character-image');
                characterImage.src = randomCharacter.imagen;

                const characterName = document.getElementById('character-name');
                characterName.textContent = randomCharacter.personaje;

                const characterNick = document.getElementById('character-nick');
                characterNick.textContent = randomCharacter.apodo;

                const characterHogwartsStudent = document.getElementById('character-hogwarts-student');
                characterHogwartsStudent.textContent= randomCharacter.estudianteDeHogwarts ? 'Si' : 'No';
                
                const characterHouse = document.getElementById('character-house');
                characterHouse.textContent = randomCharacter.casaDeHogwarts;

                const characterActor = document.getElementById('character-actor');
                characterActor.textContent = randomCharacter.interpretado_por;

                
            })
            .catch(error => {
                // Manejar cualquier error que pueda ocurrir durante la solicitud
                console.error('Error:', error);
            });
        }


