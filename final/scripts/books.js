const url = 'https://www.googleapis.com/books/v1/volumes?q=fiction&langRestrict=en&maxResults=20';
const container = document.querySelector('.books-container');



fetch(url)
    .then(response => response.json())
    .then(data => {
        const books = data.items;
        console.log(books);
        displayBooks(books);
    })

function displayBooks(books) {
    container.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        const name = document.createElement('h2');
        const author = document.createElement('p');
        const image = document.createElement('img');
        // Fill info
        name.textContent = book.volumeInfo.title || 'Unknown Title';
        author.textContent = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
        image.setAttribute('src', book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200');

        bookElement.appendChild(image);
        bookElement.appendChild(name);
        bookElement.appendChild(author);
        container.appendChild(bookElement);
    })}