document.addEventListener('DOMContentLoaded', function () {
    const poolForm = document.getElementById('pool-form');
    const addressInput = document.getElementById('address-input');
    const warningMessage = document.getElementById('warning-message');
    const submitButton = document.querySelector('button[type="submit"]');

    if (poolForm) {
        poolForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const image = document.getElementById('image-input').value;
            const address = addressInput.value.trim();
            const waterVolume = parseInt(document.getElementById('water-volume-input').value, 10);
            const maxVisitors = parseInt(document.getElementById('max-visitors-input').value, 10);
            const price = parseFloat(document.getElementById('price-input').value);

            const pools = JSON.parse(localStorage.getItem('pools')) || [];

            const addressExists = pools.some(pool => pool.address === address);
            if (addressExists) {
                displayWarningMessage('The address already exists. Please enter a unique address.');
                return;
            }

            const newPool = { image, address, waterVolume, maxVisitors, price };
            pools.push(newPool);
            localStorage.setItem('pools', JSON.stringify(pools));
            displayPools(pools);
            poolForm.reset();
            warningMessage.textContent = '';
            submitButton.disabled = false;
            window.location.href = 'info.html';
        });

        addressInput.addEventListener('input', function () {
            const pools = JSON.parse(localStorage.getItem('pools')) || [];
            const address = addressInput.value.trim();

            const addressExists = pools.some(pool => pool.address === address);
            if (addressExists) {
                displayWarningMessage('The address already exists. Please enter a unique address.');
                submitButton.disabled = true;
            } else {
                warningMessage.textContent = '';
                submitButton.disabled = false;
            }
        });
    }

    function displayWarningMessage(message) {
        warningMessage.textContent = message;
        warningMessage.style.color = 'red';
    }
});

