const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// Sử dụng middleware
app.use(express.json()); // Thêm middleware để xử lý JSON
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes API    
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Server!' });
});

// APIs
app.use('/api/admin', require('./api/admin.js'));
app.use('/api/customer', require('./api/customer.js'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
