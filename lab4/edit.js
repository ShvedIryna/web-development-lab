let pools = JSON.parse(localStorage.getItem('pools')) || [];

const urlParams = new URLSearchParams(window.location.search);
const poolIndex = urlParams.get('poolIndex');

if (poolIndex !== null && poolIndex < pools.length) {
    const pool = pools[poolIndex];

    document.getElementById('address').value = pool.address;
    document.getElementById('waterVolume').value = pool.waterVolume;
    document.getElementById('maxVisitors').value = pool.maxVisitors;
    document.getElementById('price').value = pool.price;
}

document.getElementById('edit-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const address = document.getElementById('address').value.trim();
    const waterVolume = parseInt(document.getElementById('waterVolume').value);
    const maxVisitors = parseInt(document.getElementById('maxVisitors').value);
    const price = parseInt(document.getElementById('price').value);

    pools[poolIndex] = {
        ...pools[poolIndex],
        address,
        waterVolume,
        maxVisitors,
        price
    };

    localStorage.setItem('pools', JSON.stringify(pools));
    window.location.href = 'info.html';
});
