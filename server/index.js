const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const EmployeeModel = require('./models/Employee');
const path=require('path')
const bcrypt = require('bcrypt');

const app = express();
connectDb();

app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
app.post('/register', async (req, res) => {
  try {
    
    const existingUser = await EmployeeModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const registrationData = { ...req.body, password: hashedPassword };

    const createdEmployee = await EmployeeModel.create(registrationData);

    res.status(201).json({ success: true, message: 'Registration successful', data: createdEmployee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Registration failed', error: error.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await EmployeeModel.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Incorrect password' });
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
