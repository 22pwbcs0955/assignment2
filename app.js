document.addEventListener('DOMContentLoaded', function () {
    let data; // Declare data variable outside the fetch block

    // Fetch book details from the JSON file (Assuming books.json is in the same directory)
    fetch('books.json')
        .then(response => response.json())
        .then(bookData => {
            data = bookData; // Assign the fetched data to the outer variable

            // Populate categories and display all books
            populateCategories(data);
            displayBooks(data);
        })
        .catch(error => console.error('Error fetching books:', error));

    const categoryFilter = document.getElementById('category');
    categoryFilter.addEventListener('change', function () {
        const selectedCategory = categoryFilter.value.toLowerCase();

        // Filter books based on the selected category
        const filteredBooks = data.filter(book =>
            book.category.toLowerCase() === selectedCategory
        );

        // Display the filtered books
        displayBooks(filteredBooks);
    });

    // Function to populate categories in the filter dropdown
    function populateCategories(data) {
        // Get the filter dropdown element by its ID
        const categoryFilter = document.getElementById('category');

        // Extract unique categories from the book data
        const categories = [...new Set(data.map(book => book.category))];

        // Iterate through the categories and create an option for each
        categories.forEach(category => {
            // Create an option element
            const option = document.createElement('option');

            // Set the value and text content of the option
            option.value = category;
            option.text = category;

            // Append the option to the filter dropdown
            categoryFilter.appendChild(option);
        });
    }

    // Function to display books
    function displayBooks(books) {
        const bookList = document.querySelector('.book-list');
        bookList.innerHTML = ''; // Clear previous content

        books.forEach(book => {
            // Create elements for each book
            const card = document.createElement('div');
            card.classList.add('book-card');

            const title = document.createElement('h2');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = 'Author: ' + book.author;

            const category = document.createElement('p');
            category.textContent = 'Category: ' + book.category;

            const description = document.createElement('p');
            description.textContent = 'Description: ' + book.description;

            // Append elements to the card
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(category);
            card.appendChild(description);

            // Append the card to the book list
            bookList.appendChild(card);
        });
    }
});
