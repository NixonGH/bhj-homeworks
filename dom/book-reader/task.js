document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const fontSizeLinks = document.querySelectorAll('.book__control_font-size .font-size');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            fontSizeLinks.forEach(el => el.classList.remove('font-size_active'));
            this.classList.add('font-size_active');

            book.classList.remove('book_fs-small', 'book_fs-big');

            const size = this.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
});