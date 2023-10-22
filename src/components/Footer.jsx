import { useDispatch, useSelector } from "react-redux";
import { allTodosCompleted, completedTodosCleared, selectTodos } from "../ReducerSlices/todoSlice";

import RemainingTodos from "./RemainingTodos";
import {
  colorFilterChanged,
  statusFilterChanged,
} from "../ReducerSlices/filtersSlice";
import StatusFilter from "./StatusFilter";
import ColorFilters from "./ColorFilters";

const Footer = () => {
  const dispatch = useDispatch();
  const MarkAllCompleted=()=>{
    dispatch(allTodosCompleted())
  }
  const ClearAllCompleted=()=>[
     dispatch(completedTodosCleared())
  ]

  const todosRemaining = useSelector((state) => {
    
    const uncompletedTodos = selectTodos(state).filter(
      (todo) => !todo.completed,
    );
    return uncompletedTodos.length;
  });

  const { status, colors } = useSelector((state) => state.filters);

  const onStatusChange = (status) => dispatch(statusFilterChanged(status));

  const onColorChange = (color, changeType) => {
    dispatch(colorFilterChanged(color, changeType));
  };
  return (
    <footer className="p-4 text-Dark_Blue grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-3">
        <h5 className="font-semibold text-2xl">Actions</h5>
        <button className="bg-Orange py-2 px-4 rounded text-white" onClick={MarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="bg-Orange py-2 rounded text-white" onClick={ClearAllCompleted}>
          Clear Completed
        </button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
};

export default Footer;
