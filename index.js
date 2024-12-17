const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb://127.0.0.1:27017/Userdb';  // Your MongoDB URI

    // Connect to MongoDB
    await mongoose.connect(uri, {

      serverSelectionTimeoutMS: 5000,  // Timeout for connecting to the MongoDB server
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);  // Exit if connection fails
  }
};

connectDB();


const express = require('express')
const app = express();
const port = 3000
const userSchema = require("./Model/User.model")

app.use(express.json());



app.set('view engine', 'ejs');
app.set('views', './views');
const uploadMiddleware = require('./fileUpload'); // Import the upload middleware you created
var userController = require('./Controller/User_reg');
const userLoginController = require('./Controller/User_login');
const userDashboardController = require('./Controller/dashboard')

app.get('/', userController.userRegister)
app.post('/register', uploadMiddleware, userController.userRegister)



app.get('/login', userLoginController.userLogin)
const userLogin = (req, res) => {
  const { email, password } = req.body;
}
app.post('/login', userLoginController.userLogin)

app.get('/dashboard/:user',userDashboardController.dashboard)


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); // For form data
app.use(bodyParser.json()); // For JSON data




app.listen(port, () => {
  console.log("port is running")
})

