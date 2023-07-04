const buildMenu = (piatti) => {
    const shuffleCards = piatti.sort(() => Math.random() - 0.5);
    const threeCards = shuffleCards.slice(0,3);

    buildSection(threeCards, 'consigliati');

/*

    Ho scelto di non usare il loading, inserisco una domanda qui nel caso tu la legga, ma potrei farla
    a lezione: potrei usare un gif via src? Per una piccola animazione di loading?

    document.getElementById('loadingMessage').style.display = 'none';


*/

}

const buildSection = (piatti, sectionName) => {
    const section = document.getElementById(sectionName);
    
    for(let piatto of piatti) {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
        
        if(!piatto.available) {
            card.style.opacity = '0.5';
        }

        card.innerHTML = `
            <div class="card shadow">
                <img
                    src="${piatto.imageUrl}"
                    
                    class="card-img-top"
                    
                    alt="${piatto.title}"
                />
                <div class="card-body">

                    <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                
                    <p class="card-text">
                      ${piatto.description}
                    </p>
                </div>
            </div>`;

        section.appendChild(card);
    }
}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildMenu(response))
    .catch((error) => console.log('ERRORE', error));