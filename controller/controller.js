const express = require("express");
const Task = require("../model/task_model");

exports.home = async (req, res) => {
  res.send("Home page");
};
exports.CreateProduct = async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    console.log("Post nhi hua");
  }
};
exports.getAllProduct = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (error) {
    console.log("problem");
  }
};
exports.getOneProduct = async (req, res) => {
  try {
    const id = req.params.id; // Access the 'id' parameter correctly
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("No task with this id");
    }
    res.status(200).send(task); // Correct the status code to 200 (OK)
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Error fetching task");
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id; // Access the 'id' parameter correctly
    const task = await Task.findByIdAndDelete(id); // Use findByIdAndDelete
    console.log("delete ho gaya");
    if (!task) {
      return res.status(404).send("No task with this id");
    }
    res.status(200).send("Task deleted successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error deleting task");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).send(task);
  } catch (error) {
    console.log("Update nhi hua");
  }
};

exports.replaceTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = req.body; // Assuming the request body contains the updated task data
    const options = {
      new: true, // Return the modified document after update
      runValidators: true, // Run validators on the updated document
    };

    const task = await Task.findByIdAndUpdate(id, updatedTask, options);

    if (!task) {
      return res.status(404).send("No task with this id");
    }

    res.status(200).send("Task replaced successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error replacing task");
  }
};
