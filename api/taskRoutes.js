const express = require("express");
const router = express.Router();
const {
    getTodoList,
    createTask,
    updateTask,
    deleteTask,
} = require("./taskController");

router.route("/").get(getTodoList);

router.route("/new").post(createTask);

router.route("/completed/:id").put(updateTask);

router.route("/delete/:id").delete(deleteTask);

module.exports = router;
