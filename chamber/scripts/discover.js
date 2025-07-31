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
        const caption = document.createElement('figcaption');
        const address = document.createElement('p');
        const description = document.createElement('p');
        const button = document.createElement('button');
        title.textContent = location.name;
        image.setAttribute('src', location.image);
        image.setAttribute('alt', location.name);
        image.setAttribute('loading', 'lazy');
        caption.textContent = location.name;
        imageContainer.appendChild(image);
        imageContainer.appendChild(caption);
        address.textContent = location.address;
        description.textContent = location.description;
        button.textContent = 'Learn More';

        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(imageContainer);
        card.appendChild(button);
        gridContainer.appendChild(card);
    });
}

fetchData(dataUrl);