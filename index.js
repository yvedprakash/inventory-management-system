document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inventory-form');
    const tableBody = document.querySelector('#inventory-table tbody');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const itemName = document.getElementById('item-name').value.trim();
        const itemQuantity = parseInt(document.getElementById('item-quantity').value.trim(), 10);
        
        if (itemName && !isNaN(itemQuantity)) {
            addItemToTable(itemName, itemQuantity);
            form.reset();
        }
    });

    function addItemToTable(name, quantity) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${quantity}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            </td>
        `;
        tableBody.appendChild(row);

        row.querySelector('.remove').addEventListener('click', function() {
            row.classList.add('fade-out');
            setTimeout(() => row.remove(), 300);  // Allow fade-out animation
        });

        row.querySelector('.edit').addEventListener('click', function() {
            document.getElementById('item-name').value = name;
            document.getElementById('item-quantity').value = quantity;
            row.remove();  // Optionally remove the item from the list
        });
    }
});