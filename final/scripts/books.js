const url = 'https://www.googleapis.com/books/v1/volumes?q=fiction&langRestrict=en&maxResults=15';
const historyUrl = 'https://www.googleapis.com/books/v1/volumes?q=history&langRestrict=en&maxResults=15';
const scienceUrl = 'https://www.googleapis.com/books/v1/volumes?q=fantasy&langRestrict=en&maxResults=15';
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
        const image = document.createElement('img');
        const moreButton = document.createElement('button');
        moreButton.textContent = 'More Info';
        moreButton.classList.add('more-info-button');
        moreButton.type = 'button';

        moreButton.dataset.title = book.volumeInfo.title || 'Unknown Title';
        moreButton.dataset.description = book.volumeInfo.description || 'No description available';
        moreButton.dataset.image = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200';
        moreButton.dataset.authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
        moreButton.dataset.publishedDate = book.volumeInfo.publishedDate || 'Unknown Date';
        moreButton.dataset.publisher = book.volumeInfo.publisher || 'Unknown Publisher';
        


        name.textContent = book.volumeInfo.title || 'Unknown Title';
        image.setAttribute('src', book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200');
        image.loading = 'lazy';
        bookElement.appendChild(image);
        bookElement.appendChild(name);
        bookElement.appendChild(moreButton);
        sectionContainer.appendChild(bookElement);
    });
}

