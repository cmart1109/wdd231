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
    const selected = [];
    const max = Math.min(3, members.length);

    while (selected.length < max) {
        const index = Math.floor(Math.random() * members.length);
        const member = members[index];
if (!selected.some(m => m.name === member.name)) {
            selected.push(member);

            const card = document.createElement('div');
            card.classList.add('spotlight-card');

            const name = document.createElement('h3');
            const address = document.createElement('p');
            const image = document.createElement('img');
            const phone = document.createElement('p');
            const url = document.createElement('a');
            const membership = document.createElement('p');

            name.textContent = member.name;
            address.textContent = member.address;
            phone.textContent = member.phone;
            image.setAttribute('src', member.image);
            image.setAttribute('alt', `Image of ${member.name}`);
            image.setAttribute('loading', 'lazy');
            url.setAttribute('href', member.url);
            url.textContent = "Website";
            membership.textContent = `Membership Level: ${member.membership}`;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(url);
            card.appendChild(membership);

            container.appendChild(card);
        }
        }
    }
fetchData();