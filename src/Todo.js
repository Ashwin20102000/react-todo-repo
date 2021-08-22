import "./styles.css";
export default function Todo({ todo, ToggleTodo }) {
  function chageSetter() {
    ToggleTodo(todo.id);
  }
  return (
    <div className="Todo">
      <div className="outlet">
        {/* <input class="chkbox" onChange={chageSetter} type="checkbox" /><p>{todo.name}</p> */}
        <div class="pretty p-default p-curve p-toggle">
          <input type="checkbox" onChange={chageSetter} />
          <div class="state p-success p-on">
            <label class="striker">{todo.name}</label>
          </div>
          <div class="state p-danger p-off">
            <label>{todo.name} </label>
          </div>
        </div>
      </div>
    </div>
  );
}
