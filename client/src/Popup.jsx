import { useState } from "react";

function Popup({ todoList, setTodoList, isActive }) {
    const [newTask, setNewTask] = useState("");
    const [dueDate, setDueDate] = useState("");

    // HTTP REQUEST FUNCTION -----------------------------------------------------------------------
    // POST
    async function createTask() {
        // Returns created task
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/tasks/new",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: newTask, due: dueDate }),
            }
        ).then((res) => res.json());

        // Add created task to frontend todoList
        setTodoList([...todoList, response]);

        // Reset state variables
        setNewTask("");
        setDueDate("");
        isActive(false);
    }

    return (
        <div class="task-row">
            <div id="popup">
                <label htmlFor="task-entry">Task:</label>
                <input
                    id="task-entry"
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                ></input>
                <label htmlFor="due-entry">(Due:)</label>
                <input
                    id="due-entry"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                ></input>
                <span className="create-task" onClick={createTask}>
                    Add
                </span>
            </div>
            <div class="filler"></div>
        </div>
    );
}

export default Popup;
