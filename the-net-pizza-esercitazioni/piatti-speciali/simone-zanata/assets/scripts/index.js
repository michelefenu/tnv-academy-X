

function randomAarray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const piattiRandom = [];


const buildList = (piatti) => {
    const testUlElement = document.getElementById('piatti-alternativi');
    const antipasti = piatti.filter(x => x.category === 'antipasti');
    const primi = piatti.filter(x => x.category === 'primi');
    piattiRandom.push(...antipasti);
    piattiRandom.push(...primi);
    randomAarray(piattiRandom);

    for (let i = 0; i <= 2; i++) {

        const card = document.createElement('div');
        card.classList.add('col-6', 'col-sm-6', 'col-md-4', 'py-2');
        card.innerHTML = `
         <div class="card" style="width: 13rem;">
         <img src="${piattiRandom[i].imageUrl}" class="card-img-top" alt="${piattiRandom[i].title}">
         <div class="card-body">
         <p class="card-text">
              ${piattiRandom[i].title}
          </p>
         </div>
         </div>`;
        testUlElement.appendChild(card);
    }

}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildList(response))
    .catch((error) => console.log('ERRORE', error));
