const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connect database
connectDB();
//initialize middleware
app.use(express.json({extended:false}));

//define routes
app.use('/api/user', require ('./routes/api/user'));




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));