/* const buildList = (piatti) => {
    const testUlElement = document.getElementById('test');

    for (let piatto of piatti) {
        const liElement = document.createElement('li');
        liElement.innerText = piatto.title;

        testUlElement.appendChild(liElement);
    }
} */

const buildMenu = (piatti) => {
    // 1 - Capire quante categorie diverse ci sono
    const categories = [...new Set(piatti.map(x => x.category))];

    // 2 - Ciclarle e creare tante sezioni quante sono le categorie
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


    // 3 - Metterci dentro i piatti

  /*   const antipasti = piatti.filter(x => x.category === 'antipasti');
    const primi = piatti.filter(x => x.category === 'primi');
    const dolci = piatti.filter(x => x.category === 'dolci');

    buildSection(antipasti, 'antipasti');
    buildSection(primi, 'primi');
    buildSection(dolci, 'dolci'); */

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
