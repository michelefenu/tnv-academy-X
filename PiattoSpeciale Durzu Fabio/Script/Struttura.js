const buildList = (randomCards, sectionName) => {
  const section = document.getElementById(sectionName);

  const shuffledCards = randomCards.sort(() => Math.random() - Math.random());
  const selectedCards = shuffledCards.slice(0, 3);

  for (let element of selectedCards) {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-sm-15', 'col-md-3', 'py-2');
    card.innerHTML = `
        <div class="card small-card">
          <img src="${element.imageUrl}" 
          class="card-img-top" 
          alt="${element.title}">
          <div class="card-body">
            <h5 class="card-title">${element.title} - ${element.price}"</h5>
            <p class="card-text">${element.description}</p> 
          </div>
        </div>
      </div>`;

    section.appendChild(card);
  }
}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
  .then(response => response.json())
  .then(response => buildList(response, 'rollingcards'))
  .catch(error => console.log('Errore', error));
