const container = document.querySelector('.spotlights');
const data = "./data/members.json";

async function fetchData() {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        const membersArray = members.members;
        const filteredArray = membersArray.filter(members => members.membership === "gold" || members.membership === "silver");
        displayMembers(filteredArray) 
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayMembers(members) {
     for (let membersCount = 0; membersCount = 2; membersCount++) {
        const randomMember = Math.floor(Math.random() * members.length);
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        const name = document.createElement('h3');
        const address = document.createElement('p');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        const url = document.createElement('a');
        const membership = document.createElement('p')
        name.textContent = members[randomMember].name;
        address.textContent = members[randomMember].address;
        phone.textContent = members[randomMember].phone;
        image.setAttribute('src', members[randomMember].image);
        image.setAttribute('alt', `Image of ${members[randomMember].name}`);
        image.setAttribute('loading', 'lazy');
        url.setAttribute('href', members[randomMember].url);
        url.textContent = "Website";
        membership.textContent = `Membership Level: ${members[randomMember].membership}`
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership)
        container.appendChild(card);        
     }

    };


fetchData();