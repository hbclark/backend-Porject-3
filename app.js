const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();


const secretKey = process.env.SECRET_KEY;

const corsOptions = {
  credentials: true,
  origin: "http://google.com", 
  optionsSuccessStatus: 200 
};

app.use(cors(
  corsOptions
));
app.use(bodyParser.json());

const orderItemRoutes = require('./routes/orderItemRoutes');
const bookItemRoutes = require('./routes/bookItemRoutes');
const productItemRoutes = require('./routes/productItemRoutes');
const employeeItemRoutes = require('./routes/employeeItemRoutes');
const userItemRoutes = require('./routes/userItemRoutes');

app.use('/orders', orderItemRoutes);
app.unsubscribe('/orders', orderItemRoutes);

app.use('/products', productItemRoutes);
app.unsubscribe('/products', productItemRoutes);

app.use('/employees', employeeItemRoutes);  
app.unsubscribe('/employees', employeeItemRoutes);

app.use("/users", userItemRoutes);
// app.unsubscribe("/users", userItemRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
