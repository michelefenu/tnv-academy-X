const buildMenu = (piatti) => {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    piatti = shuffleArray(piatti);
    piatti = piatti.slice(0, 3);

    const categories = [...new Set(piatti.map(x => x.category))];

    const menuSections = document.getElementById('menuSections');

    for (let category of categories) {
        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add('col-12', 'pb-2');
        sectionTitle.innerHTML = `<h3>${category}</h3>`;
        menuSections.appendChild(sectionTitle);

        const sectionPiattiDiv = document.createElement('div');
        sectionPiattiDiv.classList.add('row');
        sectionPiattiDiv.id = category;
        menuSections.appendChild(sectionPiattiDiv);

        const sectionPiatti = piatti.filter(x => x.category === category);
        buildSection(sectionPiatti, `${category}`);
    }

    document.getElementById('menu').style.display = 'block';
    document.getElementById('loadingMessage').style.display = 'none';
}

const buildSection = (piatti, sectionName) => {
    const section = document.getElementById(sectionName);

    for (let piatto of piatti) {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        if (!piatto.available) {
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