const express = require('express')
const dataRoutes = require('./routes/dataRoutes');
const app = express();

app.use(express.json()); 
app.use('/api/v1/dataRoutes',dataRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})