import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String },
  assign: { type: String },
  dueDate: { type: Date },
}, { timestamps: true });

const Task = mongoose.model('userTask', taskSchema);

export default Task;
