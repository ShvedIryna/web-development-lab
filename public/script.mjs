class Pool {
    constructor(address, waterVolume, maxVisitors, price) {
        this.address = address;
        this.waterVolume = waterVolume;
        this.maxVisitors = maxVisitors;
        this.price = price;
    }
}

export async function loadPools() {
    try {
        const response = await fetch('/pools');
        if (!response.ok) throw new Error('Не вдалося завантажити басейни');
        const pools = await response.json();
        displayPools(pools);
    } catch (error) {
        console.error('Помилка при завантаженні басейнів:', error);
    }
}

function displayPools(poolArray) {
    let poolGrid = document.querySelector('#pool-grid');

    if (!poolGrid) {
        console.warn('Element with ID "pool-grid" not found. Creating it dynamically.');
        poolGrid = document.createElement('div');
        poolGrid.id = 'pool-grid';
        document.body.appendChild(poolGrid);
    }

    poolGrid.innerHTML = '';

    poolArray.forEach((pool, index) => {
        const poolCard = document.createElement('div');
        poolCard.classList.add('pool-card');

        poolCard.innerHTML = `
            <div class="pool-info">
                <p><strong>Address:</strong> ${pool.address}</p>
                <p><strong>Water Volume:</strong> ${pool.waterVolume} liters</p>
                <p><strong>Max Visitors:</strong> ${pool.maxVisitors}</p>
                <p><strong>Price:</strong> $${pool.price}</p>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const editBtn = poolCard.querySelector('.edit-btn');
        const deleteBtn = poolCard.querySelector('.delete-btn');

        editBtn.addEventListener('click', () => editPool(index));
        deleteBtn.addEventListener('click', () => deletePool(index));

        poolGrid.appendChild(poolCard);
    });
}

function editPool(index) {
    console.log(`Editing pool at index: ${index}`);
    window.location.href = `edit.html?poolIndex=${index}`;
}

function deletePool(index) {
    console.log(`Deleting pool at index: ${index}`);
    if (confirm("Are you sure you want to delete this pool?")) {
        fetch(`/pools/${index}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Pool deleted:', data);
                loadPools();
            })
            .catch(error => console.error('Error:', error));
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadPools();

    document.querySelector('#sort-asc-btn')?.addEventListener('click', () => {
        fetch('/pools?sortOrder=asc')
            .then(response => response.json())
            .then(sortedPools => {
                displayPools(sortedPools);
            })
            .catch(error => console.error('Error:', error));
    });

    document.querySelector('#sort-desc-btn')?.addEventListener('click', () => {
        fetch('/pools?sort_pool=desc')
            .then(response => response.json())
            .then(sortedPools => {
                displayPools(sortedPools);
            })
            .catch(error => console.error('Error:', error));
    });

    document.querySelector('#search-btn')?.addEventListener('click', () => {
        const searchText = document.querySelector('#search-input').value.toLowerCase().trim();
        fetch(`/pools?search_text=${encodeURIComponent(searchText)}`)
            .then(response => response.json())
            .then(filteredPools => {
                displayPools(filteredPools);
            })
            .catch(error => console.error('Error:', error));
    });

    document.querySelector('#total-btn')?.addEventListener('click', () => {
        fetch('/pools')
            .then(response => response.json())
            .then(pools => {
                calculateTotalPrice(pools);
            })
            .catch(error => console.error('Error:', error));
    });
});

function calculateTotalPrice(poolArray) {
    const totalPrice = poolArray.reduce((total, pool) => total + pool.price, 0);
    document.querySelector('#total-price').textContent = `Total Price: $${totalPrice}`;
}