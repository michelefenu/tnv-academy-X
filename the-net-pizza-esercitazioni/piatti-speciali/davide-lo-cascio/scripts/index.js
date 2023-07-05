const buildMenu = (piatti) => {
    const piattiCasuali = getPiattiCasuali(piatti, 3); 

    const antipasti = piattiCasuali.filter(x => x.category === 'antipasti');
    const primi = piattiCasuali.filter(x => x.category === 'primi');
    const dolci = piattiCasuali.filter(x => x.category === 'dolci');

    buildSection(antipasti, 'antipasti');
    buildSection(primi, 'primi');
    buildSection(dolci, 'dolci');

    document.getElementById('menu').style.display = 'block';
    document.getElementById('loadingMessage').style.display = 'none';
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

const getPiattiCasuali = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
}

fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildMenu(response))
    .catch((error) => console.log('ERRORE', error));