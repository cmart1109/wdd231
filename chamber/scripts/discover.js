const gridContainer = document.querySelector('.grid-container');
const dataUrl = './data/discover.json';

async function fetchData(data) {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const locations = await response.json();
        displayLocations(locations.locations);

    } catch (error) {
        
        console.error('There has been a problem with your fetch operation:', error);

    }
}


function displayLocations(array) {
    gridContainer.innerHTML = ''; 

    array.forEach(location => {
        const card = document.createElement('section');
        card.classList.add('discover-card');
        const title = document.createElement('h2');
        const imageContainer = document.createElement('figure');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const description = document.createElement('p');
        const button = document.createElement('button');
        title.textContent = location.name;
        image.setAttribute('src', location.image);
        image.setAttribute('alt', location.name);
        image.setAttribute('loading', 'lazy');
        imageContainer.appendChild(image);
        address.textContent = location.address;
        address.classList.add('discover-address');
        description.textContent = location.description;
        description.classList.add('discover-description');
        button.textContent = 'Learn More';
        button.classList.add('discover-card-button');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(imageContainer);
        card.appendChild(address);
        card.appendChild(button);
        gridContainer.appendChild(card);
    });
}

fetchData(dataUrl);