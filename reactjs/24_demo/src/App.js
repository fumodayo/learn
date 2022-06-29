import { useStore, actions } from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };

  return (
    <div>
      <input
        value={state.todoInput}
        placeholder="Todo"
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}
