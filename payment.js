
document.addEventListener('DOMContentLoaded', function () {
    let pricingDetails;
    let cartItems; 
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            pricingDetails = data;

            fetchCartItems();
        })
        .catch(error => console.error('Error fetching pricing details:', error));

    function fetchCartItems() {
    
        cartItems = [
            {
                "id": 1,
                "title": "To Kill a Mockingbird",
                "quantity": 2
            },
            {
                "id": 2,
                "title": "1984",
                "quantity": 1
            },
            {
                "id": 3,
                "title": "The Great Gatsby",
                "quantity": 3
            },
        ];

        generateReceipt();
    }

    function generateReceipt() {
        const bookDetailsBody = document.getElementById('bookDetailsBody');
        const totalAmountElement = document.getElementById('totalAmount');

        let totalAmount = 0;

        cartItems.forEach(item => {
            const bookDetails = pricingDetails.find(book => book.id === item.id);

            if (bookDetails) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.title}</td>
                    <td>$${(item.quantity * bookDetails.price).toFixed(2)}</td>
                `;

                bookDetailsBody.appendChild(row);
                totalAmount += item.quantity * bookDetails.price;
            }
        });

        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    }
});
