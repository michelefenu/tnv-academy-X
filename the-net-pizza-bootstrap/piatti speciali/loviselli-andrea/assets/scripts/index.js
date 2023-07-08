
/*Sono 12, ma se ogni volta poi uso quell'indice di partenza devo avere almeno tre spazi. Considerando che lo 0 è incluso, devo far si che se capiti */ 

const buildRandomThreeChoices = (piatti) => {
    const section = document.getElementById('tre-alternative-random');
    let maxTre = 0;

    for (i = Math.random() * 10 | 0; maxTre < 3; i ++){
        maxTre++;
        const card = document.createElement('div');
        card.classList.add('col-12' , 'col-sm-6', 'col-md-4', 'py-2');
        

        card.innerHTML =`
        <div class="card shadow">
            <img 
                src="${piatti[i].imageUrl}" 
                class="card-img-top" 
                alt="${piatti[i].title}" 
            />
            <div class="card-body">
                <h5 class="card-title">${piatti[i].title} - ${piatti[i].price}</h5>
                <p class="card-text">
                    ${piatti[i].description}
                </p>
            </div>
        </div>`;

section.appendChild(card);
    }
}



fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildRandomThreeChoices(response))
    .catch((error) => console.log('ERRORE', error));