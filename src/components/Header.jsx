
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveNewTodo } from "../ReducerSlices/todoSlice";
const Header = () => {
  const [text, SetText] = useState("");
  const [status, SetStatus] = useState("idle");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    SetText(e.target.value);
  };
  const handleKeyDown = async (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      SetStatus("Loading");
      await dispatch(saveNewTodo(trimmedText));
      SetText("");
      SetStatus("Idle");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="What You want Done ?"
          value={text}
          onChange={handleChange}
          autoFocus={true}
          onKeyDown={handleKeyDown}
          className="w-[500px] p-4 text-lg shadow-lg outline-none bg-Vanilla placeholder:text-Dark_Blue rounded-lg placeholder:text-lg"
        />
      </div>
    </div>
  );
};

export default Header;
