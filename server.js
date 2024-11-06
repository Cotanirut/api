//api
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
// app.use(cors());

mongoose.connect('mongodb+srv://s6204062636325:cot%40cat414@csj.iox8m.mongodb.net/CSJ?retryWrites=true&w=majority', {
    dbName: 'CSJ' 
}).then(() => {
    console.log('Connected to MongoDB by P"cotcat"');
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});

// ตัวอย่างเส้นทาง API
app.get('/', (req, res) => {
    res.send('Hello from server');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

