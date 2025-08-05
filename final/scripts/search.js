const container = document.querySelector('.books-container');
const params = new URLSearchParams(window.location.search);
const query = params.get('q');

if (query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&langRestrict=en&maxResults=20`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const books = data.items;
      displayBooks(books);
    })
    .catch(err => {
      container.innerHTML = '<p>Error loading books.</p>';
      console.error(err);
    });
} else {
  container.innerHTML = '<p>No search query provided.</p>';
}

function displayBooks(books) {
  books.forEach(book => {
    const info = book.volumeInfo;

    const card = document.createElement('div');
    card.classList.add('book');
    const image = document.createElement('img');
    const name = document.createElement('h2');
    const author = document.createElement('p');
    const description = document.createElement('p');
    image.src = `${info.imageLinks?.thumbnail || 'default.jpg'}" alt="${info.title}`;
    name.textContent = info.title || 'Unknown Title';
    author.textContent = info.authors ? info.authors.join(', ') : 'Unknown Author';
    description.textContent = info.description || 'No description available';
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(description);
    container.appendChild(card);
  });
}
