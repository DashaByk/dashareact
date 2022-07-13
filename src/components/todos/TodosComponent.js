import {useEffect, useState} from "react";
import {getTodos} from "../../services/Service";
import TodoComponent from "./TodoComponent";

function TodosComponent() {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(value => setTodos([...value]))
    }, [])
    return (
        <div>
            {
                todos.map(value => <TodoComponent item={value} key={value.id}/>)
            }

        </div>
    );
}

export default TodosComponent;