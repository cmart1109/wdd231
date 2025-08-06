const dialog = document.getElementById('book-details');
const moreInfoButtons = document.querySelectorAll('.more-info-button');
const closeButton = document.querySelector('.close-dialog-button');
const bookTitle = document.querySelector('#book-title');
const bookDescription = document.querySelector('#book-description');
const bookImage = document.querySelector('#book-image');
const bookAuthors = document.querySelector('#book-authors');
const bookPublisher = document.querySelector('#book-publisher');

document.querySelector('main').addEventListener('click', (event) => {
    if (event.target.classList.contains('more-info-button')) {
        bookTitle.textContent = event.target.dataset.title;
        bookDescription.textContent = event.target.dataset.description;
        bookImage.src = event.target.dataset.image;
        bookAuthors.textContent = event.target.dataset.authors;
        bookPublisher.textContent = event.target.dataset.publisher;
        dialog.showModal();
    }
});




closeButton.addEventListener('click', () => {
    dialog.close();
});