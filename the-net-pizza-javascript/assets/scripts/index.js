const buildMenu = (piatti) => {
    const antipasti = piatti.filter(x => x.category === 'antipasti');
    const primi = piatti.filter(x => x.category === 'primi');
    const dolci = piatti.filter(x => x.category === 'dolci');
  
    buildSection(antipasti, 'antipasti');
    buildSection(primi, 'primi');
    buildSection(dolci, 'dolci');
  
    document.getElementById('menu').style.display = 'block';
    document.getElementById('loadingMessage').style.display = 'none';
  };
  
  const buildSection = (piatti, sectionName) => {
    const section = document.getElementById(sectionName);
  
    for (let piatto of piatti) {
      const card = document.createElement('div');
      card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
  
      if (!piatto.available) {
        card.style.opacity = '0.5';
      }
  
      const img = document.createElement('img');
      img.src = piatto.imageUrl;
      img.classList.add('card-img-top');
      img.alt = piatto.title;
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.innerText = `${piatto.title} - ${piatto.price}€`;
  
      const description = document.createElement('p');
      description.classList.add('card-text');
      description.innerText = piatto.description;
  
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      card.appendChild(img);
      card.appendChild(cardBody);
      section.appendChild(card);
    }
  };
  
  fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti')
    .then((response) => response.json())
    .then((response) => buildMenu(response))
    .catch((error) => console.log('ERRORE', error));