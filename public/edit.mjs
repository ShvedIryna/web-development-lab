let pools = [];

fetch('/pools')
    .then(response => response.json())
    .then(data => {
        pools = data;

        const urlParams = new URLSearchParams(window.location.search);
        const poolIndex = parseInt(urlParams.get('poolIndex'));

        if (!isNaN(poolIndex) && poolIndex >= 0 && poolIndex < pools.length) {
            const pool = pools[poolIndex];

            document.getElementById('address-input').value = pool.address;
            document.getElementById('water-volume-input').value = pool.waterVolume;
            document.getElementById('max-visitors-input').value = pool.maxVisitors;
            document.getElementById('price-input').value = pool.price;
        } else {
            console.error('Invalid pool index:', poolIndex);
            document.getElementById('warning-message').innerText = 'Invalid pool index!';
        }
    })
    .catch(error => {
        console.error('Error fetching pools:', error);
        document.getElementById('warning-message').innerText = 'Error fetching pool data!';
    });

document.getElementById('pool-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const address = document.getElementById('address-input').value.trim();
    const waterVolume = parseInt(document.getElementById('water-volume-input').value);
    const maxVisitors = parseInt(document.getElementById('max-visitors-input').value);
    const price = parseInt(document.getElementById('price-input').value);

    const urlParams = new URLSearchParams(window.location.search);
    const poolIndex = parseInt(urlParams.get('poolIndex'));

    if (isNaN(poolIndex) || poolIndex < 0 || poolIndex >= pools.length) {
        console.error('Invalid pool index for update.');
        return;
    }

    const updatedPool = { address, waterVolume, maxVisitors, price };

    fetch(`/pools/${poolIndex}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPool),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to update pool with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Pool updated:', data);
            window.location.href = 'info.html';
        })
        .catch(error => {
            console.error('Error updating pool:', error);
            document.getElementById('warning-message').innerText = 'Error updating pool!';
        });
});
