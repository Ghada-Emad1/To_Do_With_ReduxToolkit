import { availableColors, capitalize } from "../utils/colors";

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color);
    const handleChange = () => {
      const changeType = checked ? "removed" : "added";
      onChange(color, changeType);
    };
    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
          className="mr-2"
        />
        {capitalize(color)}
        <span style={{backgroundColor:color}} className="inline-block w-[20px] h-[12px] mx-[5px]"></span>
        
      </label>
    );
  });
  return <div className="">
    <h5 className="font-semibold text-2xl">Filter By Color</h5>
    <form className="flex flex-col justify-center items-center">{renderedColors}</form>
  </div>;
};

export default ColorFilters;
