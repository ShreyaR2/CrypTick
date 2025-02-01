const express = require('express')

const dataRoutes = require('./routes/dataRoutes');
const app = express();


const tokenAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";


//Clean Code




app.use('/api/v1/dataRoutes',dataRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
    
})