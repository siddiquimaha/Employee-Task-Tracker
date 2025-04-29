import express from 'express';
import Task from '../models/Task.js';

const router = express.Router();

// Create new task
router.post('/api/usertasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.log('not accessing data', err);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

router.get('/api/usertasks', async (req, res) => {
  try {
    const tasks = await Task.find();  // fetch all tasks from DB
    res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

export default router;
