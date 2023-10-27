const TaskEntry = require("./dbConfiguration/taskModel");

// @desc request entire Todo List
// @route GET /tasks
async function getTodoList(req, res) {
    const todoList = await TaskEntry.find({}); // no filter - finds all documents
    res.json(todoList);
}

// @desc create a new task
// @route POST /tasks/new
function createTask(req, res) {
    const task = new TaskEntry({ text: req.body.text, due: req.body.due });
    task.save();
    res.json(task); // Return task for updates
}

// @desc mark a task as completed
// @route PUT /tasks/completed/:id
async function updateTask(req, res) {
    const task = await TaskEntry.findById(req.params.id);
    task.completed = !task.completed;
    task.save();
    res.json(task); // Return task for updates
}

// @desc delete a task
// @route DELETE /tasks/delete/:id
async function deleteTask(req, res) {
    const task = await TaskEntry.findByIdAndDelete(req.params.id);
    res.json(task); // Return task for updates
}

module.exports = { getTodoList, createTask, updateTask, deleteTask };
