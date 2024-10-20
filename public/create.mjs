document.addEventListener('DOMContentLoaded', function () {
    const poolForm = document.getElementById('pool-form');
    const addressInput = document.getElementById('address-input');
    const warningMessage = document.getElementById('warning-message');
    const submitButton = document.querySelector('button[type="submit"]');

    if (poolForm) {
        poolForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const address = addressInput.value.trim();
            const waterVolume = parseInt(document.getElementById('water-volume-input').value, 10);
            const maxVisitors = parseInt(document.getElementById('max-visitors-input').value, 10);
            const price = parseFloat(document.getElementById('price-input').value);

            const newPool = { address, waterVolume, maxVisitors, price };

            fetch('/pools', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPool),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Pool added:', data);
                    window.location.href = 'info.html';
                })
                .catch(error => console.error('Error:', error));
        });

        addressInput.addEventListener('input', function () {
            fetch('/pools')
                .then(response => response.json())
                .then(pools => {
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
        });
    }

    function displayWarningMessage(message) {
        warningMessage.textContent = message;
        warningMessage.style.color = 'red';
    }
});
