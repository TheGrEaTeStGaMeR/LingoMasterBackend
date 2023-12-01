const express = require('express');
const cors = require('cors');
const db = require('./config/db.config');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

db.connect();

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
