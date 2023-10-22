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
  let isLoading = status === "Loading";
  let placeholder = isLoading ? "" : "What need to be Done ?";
  let loader = isLoading ? <div className="loader flex flex-col" /> : null;
  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={handleChange}
          autoFocus={true}
          disabled={isLoading}
          onKeyDown={handleKeyDown}
          className="w-[500px] p-4 text-lg shadow-lg outline-none bg-Vanilla placeholder:text-Dark_Blue rounded-lg placeholder:text-lg"
        />
      </div>
      {loader}
    </div>
  );
};

export default Header;
