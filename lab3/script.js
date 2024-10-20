
class Pool {
    constructor(image, address, waterVolume, maxVisitors) {
        this.image = image;
        this.address = address;
        this.waterVolume = waterVolume;
        this.maxVisitors = maxVisitors;
    }
}


const pools = [
    new Pool('assets/pool1.jpg', '123 Main St', 100000, 50),
    new Pool('assets/pool2.jpg', '456 High St', 75000, 40),
    new Pool('assets/pool3.jpg', '789 Pool Rd', 120000, 60),
    new Pool('assets/pool4.jpg', '101 Ocean Ave', 85000, 35),
    new Pool('assets/pool5.jpg', '202 Lake Dr', 90000, 45),
    new Pool('assets/pool6.jpg', '303 River St', 95000, 55),
    new Pool('assets/pool7.jpg', '404 Forest Ave', 110000, 65),
    new Pool('assets/pool8.jpg', '505 Desert Rd', 130000, 70)
];


const poolGrid = document.querySelector('#pool-grid');


function displayPools(poolArray) {
    poolGrid.innerHTML = ''; 
    poolArray.forEach(pool => {
        const poolCard = `
            <div class="pool-card">
                <img src="${pool.image}" alt="Pool Image" class="pool-img">
                <div class="pool-info">
                    <p><strong>Address:</strong> ${pool.address}</p>
                    <p><strong>Water Volume:</strong> ${pool.waterVolume} liters</p>
                    <p><strong>Max Visitors:</strong> ${pool.maxVisitors}</p>
                </div>
            </div>
        `;
        poolGrid.insertAdjacentHTML('beforeend', poolCard);
    });
}


displayPools(pools);



document.querySelector('#sort-asc-btn').addEventListener('click', () => {
    const sortedPools = [...pools].sort((a, b) => a.price - b.price);
    displayPools(sortedPools);
});


document.querySelector('#sort-desc-btn').addEventListener('click', () => {
    const sortedPools = [...pools].sort((a, b) => b.price - a.price);
    displayPools(sortedPools);
});
