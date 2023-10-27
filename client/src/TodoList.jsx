import { useEffect } from "react";

function TodoList({ todoList, setTodoList }) {
    useEffect(() => {
        getTasks();
    }, []);

    // HTTP REQUEST FUNCTIONS ----------------------------------------------------------------------
    // GET
    function getTasks() {
        // Returns all tasks
        fetch(import.meta.env.VITE_API_URL + "/tasks", { method: "GET" })
            .then((res) => res.json())
            .then((data) => setTodoList(data)); // Update frontend todoList
    }
    // PUT
    async function completeTask(id) {
        // Returns updated task
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/tasks/completed/" + id,
            {
                method: "PUT",
            }
        ).then((res) => res.json());

        // Iterate through frontend todoList to find and modify targeted task element
        setTodoList((tasks) =>
            tasks.map((task) => {
                if (task._id === response._id)
                    task.completed = response.completed;
                return task;
            })
        );
    }
    // DELETE
    async function deleteTask(id) {
        // Returns deleted task
        const response = await fetch(
            import.meta.env.VITE_API_URL + "/tasks/delete/" + id,
            {
                method: "DELETE",
            }
        ).then((res) => res.json());

        // Iterate through frontend todoList to contain everything but targeted task element
        setTodoList((tasks) =>
            tasks.filter((task) => task._id !== response._id)
        );
    }

    return (
        <>
            {todoList.length > 0 ? (
                todoList.map((task) => (
                    <div
                        className={
                            "task-row" + (task.completed ? " completed" : "")
                        }
                        key={task._id}
                    >
                        <div className="task-description">
                            <span
                                className="checkbox"
                                onClick={() => completeTask(task._id)}
                            ></span>
                            <p className="task-name">{task.text}</p>
                            {task.due ? (
                                <p className="due-timestamp">
                                    [Due by: {task.due}]
                                </p>
                            ) : (
                                <p></p>
                            )}
                        </div>
                        <div
                            className="delete"
                            onClick={() => deleteTask(task._id)}
                        >
                            <p>x</p>
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="notice">You currently have no tasks</h2>
            )}
        </>
    );
}

export default TodoList;
