const url = 'https://www.googleapis.com/books/v1/volumes?q=fiction&langRestrict=en&maxResults=15';
const historyUrl = 'https://www.googleapis.com/books/v1/volumes?q=history&langRestrict=en&maxResults=15';
const scienceUrl = 'https://www.googleapis.com/books/v1/volumes?q=fantasy&langRestrict=en&maxResults=15';

const container = document.querySelector('.cat-container');
const hisContainer = document.querySelector('.his-container');
const sciContainer = document.querySelector('.sci-container');

async function getBooks() {
    try {
        const fictionResponse = await fetch(url);
        const historyResponse = await fetch(historyUrl);
        const scienceResponse = await fetch(scienceUrl);

        if (!fictionResponse.ok || !historyResponse.ok || !scienceResponse.ok) {
            throw new Error("Error getting API data");
        }

        const fictionData = await fictionResponse.json();
        const historyData = await historyResponse.json();
        const scienceData = await scienceResponse.json();

        displayBooks(fictionData.items, container);
        displayBooks(historyData.items, hisContainer);
        displayBooks(scienceData.items, sciContainer);
    } catch (error) {
        console.error("Error loading books:", error);
    }
}

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
        image.src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x200';
        image.loading = 'lazy';

        bookElement.appendChild(image);
        bookElement.appendChild(name);
        bookElement.appendChild(moreButton);
        sectionContainer.appendChild(bookElement);
    });
}

getBooks();
