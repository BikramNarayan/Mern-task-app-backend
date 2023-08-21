const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please add a task"], unique: true },
  completed: { type: Boolean, required: true, default: false },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
