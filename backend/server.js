const express = require('express')
const dataRoutes = require('./routes/dataRoutes');
const app = express();
const cors = require('cors');

app.use(cors({      //we are usong this to handle cors error
    origin:"http://localhost:5173"
}))
app.use(express.json()); 
app.use('/api/v1/dataRoutes',dataRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})