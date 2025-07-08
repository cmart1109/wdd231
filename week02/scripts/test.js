

const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json'
const cards = document.querySelector('#cards')

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets)
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const date = document.createElement('p')
        date.textContent = `Date of Birth: ${prophet.birthdate}`;
        const place = document.createElement('p');
        place.textContent = `Place of Birth: ${prophet.birthplace}`
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width', 150);
        portrait.setAttribute('height', 200);
        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place)
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getProphetData();