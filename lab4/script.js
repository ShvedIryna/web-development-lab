class Pool {
    constructor(image, address, waterVolume, maxVisitors, price) {
        this.image = image;
        this.address = address;
        this.waterVolume = waterVolume;
        this.maxVisitors = maxVisitors;
        this.price = price;
    }
}

const pools = JSON.parse(localStorage.getItem('pools')) || [
    new Pool('assets/pool1.jpg', '123 Main St', 100000, 50, 1356),
    new Pool('assets/pool2.jpg', '456 High St', 75000, 40, 9000),
    new Pool('assets/pool3.jpg', '789 Pool Rd', 120000, 60, 50000),
    new Pool('assets/pool4.jpg', '101 Ocean Ave', 85000, 35, 40000),
    new Pool('assets/pool5.jpg', '202 Lake Dr', 90000, 45, 30000),
    new Pool('assets/pool6.jpg', '303 River St', 95000, 55, 29000),
    new Pool('assets/pool7.jpg', '404 Forest Ave', 110000, 65, 2000),
    new Pool('assets/pool8.jpg', '505 Desert Rd', 130000, 70, 1000)
];

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
        console.log(pool);
        const poolCard = `
            <div class="pool-card">
                <img src="assets/pool1.jpg" alt="Pool Image" class="pool-img">
                <div class="pool-info">
                    <p><strong>Address:</strong> ${pool.address}</p>
                    <p><strong>Water Volume:</strong> ${pool.waterVolume} liters</p>
                    <p><strong>Max Visitors:</strong> ${pool.maxVisitors}</p>
                    <p><strong>Price:</strong> $${pool.price}</p>
                    <button onclick="editPool(${index})">Edit</button>
                    <button onclick="deletePool(${index})">Delete</button>
                </div>
            </div>
        `;
        poolGrid.insertAdjacentHTML('beforeend', poolCard);
    });
}

function editPool(index) {
    window.location.href = `edit.html?poolIndex=${index}`;
}

function deletePool(index) {
    if (confirm("Are you sure you want to delete this pool?")) {
        pools.splice(index, 1);
        localStorage.setItem('pools', JSON.stringify(pools));
        displayPools(pools);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayPools(pools);
});

document.querySelector('#sort-asc-btn')?.addEventListener('click', () => {
    const sortedPools = [...pools].sort((a, b) => a.price - b.price);
    displayPools(sortedPools);
});

document.querySelector('#sort-desc-btn')?.addEventListener('click', () => {
    const sortedPools = [...pools].sort((a, b) => b.price - a.price);
    displayPools(sortedPools);
});

document.querySelector('#search-btn')?.addEventListener('click', () => {
    const searchText = document.querySelector('#search-input').value.toLowerCase().trim();
    const filteredPools = pools.filter(pool => pool.address.toLowerCase().includes(searchText));
    displayPools(filteredPools);
});

document.querySelector('#total-btn')?.addEventListener('click', () => {
    const totalPrice = pools.reduce((total, pool) => total + pool.price, 0);
    document.querySelector('#total-price').textContent = `${totalPrice}`;
});
