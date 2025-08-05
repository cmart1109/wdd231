const url = 'https://www.googleapis.com/books/v1/volumes?q=fiction&langRestrict=en&maxResults=15';
const historyUrl = 'https://www.googleapis.com/books/v1/volumes?q=history&langRestrict=en&maxResults=15';
const scienceUrl = 'https://www.googleapis.com/books/v1/volumes?q=science&langRestrict=en&maxResults=15';
const container = document.querySelector('.cat-container');
const hisContainer = document.querySelector('.his-container');
const sciContainer = document.querySelector('.sci-container');


fetch(url)
    .then(response => response.json())
    .then(data => {
        const books = data.items;
        displayBooks(books, container);
    })

fetch(historyUrl)
    .then(response => response.json())
    .then(data => {
        const historyBooks = data.items;
        displayBooks(historyBooks, hisContainer);
    })

fetch(scienceUrl)
    .then(response => response.json())
    .then(data => {
        const scienceBooks = data.items;
        displayBooks(scienceBooks, sciContainer);
    })

function displayBooks(books, sectionContainer) {
    sectionContainer.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book-cat');
        const name = document.createElement('h2');
        const author = document.createElement('p');
        const image = document.createElement('img');
        name.textContent = book.volumeInfo.title || 'Unknown Title';
        author.textContent = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
        image.setAttribute('src', book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200');
        bookElement.appendChild(image);
        bookElement.appendChild(name);
        bookElement.appendChild(author);
        sectionContainer.appendChild(bookElement);
    });
}

