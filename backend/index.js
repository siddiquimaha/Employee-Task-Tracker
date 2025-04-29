import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel from './models/Employee.js';
import Task from './models/Task.js';
import history from 'connect-history-api-fallback';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();
app.use(express.json())
app.use(cors())
app.use(history());
app.use(express.static(join(__dirname, 'dist')));

//home route
app.get('/', (req, res) => {
    res.send("express server is working");
});
mongoose.connect("mongodb+srv://siddiquimahajabeen:mahaAuth123@cluster0.g5uuy.mongodb.net/employeeTracker")
.then( () => console.log("Mongodb compass connected and working"))
.catch( (err) => console.error("error", err)); 

//for data from frontend register route
app.post('/register', async (req, res) => {
  try {
    console.log("data received from frontend", req.body);
    // for user exist already we can check before creating new
    const existEmployee = await EmployeeModel.findOne({email : req.body.email})
    if (existEmployee) {
        return res.status(400).json({message : "you are already exist in our DB, plz login. "});
    }
    const newEmployee = await EmployeeModel.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create user task route
app.post('/api/usertasks', async (req, res) => {
  try {
    const { title, details, assign, dueDate } = req.body;
    const newTask = await Task.create({ title, details, assign, dueDate });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all tasks
app.get('/api/usertasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // optionally use .sort() or filters
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching all tasks:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single task by ID for dynamic route
app.get('/api/usertasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    // console.log(task)
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error("Error fetching task:", error );
    res.status(500).json({ error: "Server error" });
  }
});

//after access single data for edit rewrite updated data into mongodb
// Update task by ID
app.put('/api/usertasks/:id', async (req, res) => {
  try {
    const { title, details, assign, dueDate } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, details, assign, dueDate },
      { new: true } // returns the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Server error" });
  }
});

//the below code is for redirecting on react pages express will allow
// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, 'dist', 'index.html'));
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at  running http://localhost:${port}`);
});