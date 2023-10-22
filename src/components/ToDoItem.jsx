import { useDispatch, useSelector } from "react-redux";
import { availableColors, capitalize } from "../utils/colors";
import {
  selectTodoById,
  todoColorSelected,
  todoDeleted,
  todoToggled,
} from "../ReducerSlices/todoSlice";
const ToDoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id));

  const { text, completed, color } = todo;

  const dispatch = useDispatch();
  const handleCompletedChanged = () => {
    dispatch(todoToggled(todo.id));
  };
  const handleColorChanged = (e) => {
    const color = e.target.value;
    dispatch(todoColorSelected(todo.id,color));
  };
  const onDelete = () => {
    dispatch(todoDeleted(todo.id));
  };
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c} className="p-4 rounded">
      {capitalize(c)}
    </option>
  ));
  return (
    <li className="list-none">
      <div className="flex items-center justify-center max-w-[500px]">
        <div className="flex w-[350px] justify-start">
          <input
            type="checkbox"
            className="bg-Dark_Blue w-[20px]"
            onChange={handleCompletedChanged}
            checked={completed}
          />
          <div className="ml-[2rem] text-Dark_Blue font-bold">{text}</div>
        </div>

        <div className="flex items-center  w-[130px]">
          <select
            className="colorPicker "
            style={{ color }}
            value={color}
            onChange={handleColorChanged}
          >
            {colorOptions}
          </select>
          <button
            className="bg-Red text-white flex items-center justify-center px-3 rounded-lg text-lg font-bold"
            onClick={onDelete}
          >
            X
          </button>
        </div>
      </div>
      <hr className="m-4 border-Dark_Blue border-solid border-1" />
    </li>
  );
};

export default ToDoItem;
