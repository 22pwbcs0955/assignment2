document.addEventListener("DOMContentLoaded", function () {
    function loadBooks() {
        const bookDetailsRow = document.getElementById("bookDetailsRow");

        fetch('books.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(book => {
            
                    const card = document.createElement("div");
                    card.classList.add("col-md-4", "book-card");

                    card.innerHTML = `
                        <div class="card">
                            <img src="${book.cover_image}" class="card-img-top" alt="${book.title}">
                            <div class="card-body">
                                <h5 class="card-title book-card-title">${book.title}</h5>
                                <p class="card-text book-card-author">${book.author}</p>
                                <p class="card-text">${book.description}</p>
                                <p class="card-text book-card-price">$${book.price.toFixed(2)}</p>
                                <button class="btn btn-primary add-to-cart" data-book-id="${book.id}">Add to Cart</button>
                            </div>
                        </div>
                    `;

                    bookDetailsRow.appendChild(card);
                });

                const addToCartButtons = document.querySelectorAll(".add-to-cart");
                addToCartButtons.forEach(button => {
                    button.addEventListener("click", function () {
                        const bookId = button.getAttribute("data-book-id");
                        addToCart(bookId);
                    });
                });
            })
            .catch(error => console.error('Error fetching book data:', error));
    }

    function addToCart(bookId) {
        
        window.location.href = 'cart.html';
    }

    loadBooks();
});
