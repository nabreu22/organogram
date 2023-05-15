import "./DropdownList.css";
//reforce knowledges about funtions and parameters and 'events'
//Where does the props.label come from?
//
const DropdownList = (props) => {
  return (
    <div className="dropDown-list">
      <label>{props.label}</label>

      <select
        onChange={(event) => props.whenModified(event.target.value)}
        required={props.required}
      >
        {props.items.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownList;
