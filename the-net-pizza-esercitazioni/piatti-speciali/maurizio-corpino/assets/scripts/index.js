const generaRandom = (arrayDiIngresso, lungMax) => {
  const newArray = []

  while (newArray.length < lungMax){
    const indexRandom = Math.floor (Math.random() * arrayDiIngresso.length);
    const oggettoRandom = arrayDiIngresso[indexRandom]
    
    if(!newArray.includes(oggettoRandom)){
        newArray.push(oggettoRandom)
    }
  }
  return newArray
}


const buildRandomPiatti = (piatti) => {
    const randomPiatti = document.getElementById('random-piatti')
    const piattiRandom = generaRandom(piatti, 3)
    console.log(piattiRandom)
    console.log(piatti)
    for (let piatto of piattiRandom){
        const card = document.createElement('div')
        card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2')

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
            randomPiatti.appendChild(card);
    }
}



fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
.then((response) => response.json())
.then((response) => buildRandomPiatti(response))
.catch((error) => console.log('Errore'))
