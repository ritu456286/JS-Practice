const express = require('express');
const app = express();
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/dogs', dogsRoutes);
app.use('/admin', adminRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000');
})