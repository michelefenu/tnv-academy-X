

    function randomArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

    const newArray = [];

    const buildList = (piatti) => {
    const piattiAlternativi = document.getElementById('piatti-alternativi');
    const antipasti = piatti.filter(x => x.category === 'antipasti');
    const primi = piatti.filter(x => x.category === 'primi');
    newArray.push(...antipasti);
    newArray.push(...primi);
    randomArray(newArray);
    const shuffledArray=newArray.slice(0,3);


    for (let piatto of shuffledArray) {

        const card = document.createElement('div');
        card.classList.add('col-6', 'col-sm-6', 'col-md-4', 'py-2');
        card.innerHTML = `
         <div class="card" style="width: 13rem;">
         <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}">
         <div class="card-body">
         <p class="card-text">
              ${piatto.title}
          </p>
         </div>
         </div>`;
        piattiAlternativi.appendChild(card);
    }

}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildList(response))
    .catch((error) => console.log('ERRORE', error));
