const container = document.querySelector('.business-container');
const data = "./data/members.json";
const gridButton = document.getElementById('toggle-grid');
const tableButton = document.getElementById('toggle-table');

async function fetchData() {
    try {
        const response = await fetch(data);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        return members.members;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayGridMembers(members) {
    clearContainer();
    container.classList.remove("table");
    container.classList.add("grid");

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('card');
        const name = document.createElement('h2');
        const address = document.createElement('p');
        const image = document.createElement('img');
        const phone = document.createElement('p');
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        container.appendChild(card);
    });
}

function displayTableMembers(members) {
    clearContainer();
    let table = document.createElement("table");
    container.classList.add("table");
    container.classList.remove("grid");
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    ["Name", "Address", "Phone", "Website"].forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    let body = document.createElement("tbody");
    table.appendChild(body);
    members.forEach(member => {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        let addressCell = document.createElement("td");
        let phoneCell = document.createElement("td");
        let linkCell = document.createElement("td");
        let websiteURL = document.createElement("a");
        websiteURL.setAttribute("href", member.url);
        websiteURL.textContent = `Website: ${member.url}`;
        linkCell.appendChild(websiteURL);
        nameCell.textContent = member.name;
        addressCell.textContent = member.address;
        phoneCell.textContent = member.phone;
        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(phoneCell);
        row.appendChild(linkCell);
        table.appendChild(row);
        container.appendChild(table);
    });
}

function clearContainer() {
    container.innerHTML = ""
}

gridButton.addEventListener('click', async () => {
    let data = await fetchData();
    displayGridMembers(data);
    console.log("you are clicking the table button");
})

tableButton.addEventListener('click', async () => {
    let data = await fetchData();
    displayTableMembers(data)
    console.log("you are clicking the table button");
})

document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetchData();
    displayGridMembers(data);
})