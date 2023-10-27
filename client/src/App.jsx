import { useState } from "react";
import TodoList from "./TodoList";
import Popup from "./Popup";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [popup, setPopup] = useState(false);

    return (
        <>
            <h1>Welcome</h1>
            <h2>Your tasks</h2>

            <TodoList todoList={todoList} setTodoList={setTodoList} />

            <div className="prompt-popup" onClick={() => setPopup(!popup)}>
                {!popup ? <p>+</p> : <p>-</p>}
            </div>
            {popup ? (
                <Popup
                    todoList={todoList}
                    setTodoList={setTodoList}
                    isActive={() => setPopup()}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default App;
