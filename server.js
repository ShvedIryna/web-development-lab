const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let pools = [];
app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/info.html');
});

app.get('/pools', (req, res) => {
    let { search_text, sort_pool } = req.query;

    let filteredPools = pools;

    if (search_text) {
        search_text = search_text.toLowerCase().trim();
        filteredPools = filteredPools.filter(pool => pool.address.toLowerCase().includes(search_text));
    }

    if (sort_pool) {
        if (sort_pool === 'asc') {
            filteredPools.sort((a, b) => a.price - b.price);
        } else if (sort_pool === 'desc') {
            filteredPools.sort((a, b) => b.price - a.price);
        }
    }

    res.json(filteredPools);
});

app.post('/pools', (req, res) => {
    const { address, waterVolume, maxVisitors, price } = req.body;
    const newPool = { address, waterVolume, maxVisitors, price };
    pools.push(newPool);
    res.json({ message: 'Pool added successfully', newPool });
});

app.put('/pools/:index', (req, res) => {
    const index = req.params.index;
    const { address, waterVolume, maxVisitors, price } = req.body;

    if (pools[index]) {
        pools[index] = { address, waterVolume, maxVisitors, price };
        res.json({ message: 'Pool updated successfully', updatedPool: pools[index] });
    } else {
        res.status(404).json({ message: 'Pool not found' });
    }
});


app.delete('/pools/:index', (req, res) => {
    const index = req.params.index;
    if (pools[index]) {
        pools.splice(index, 1);
        res.json({ message: 'Pool deleted successfully' });
    } else {
        res.status(404).json({ message: 'Pool not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
