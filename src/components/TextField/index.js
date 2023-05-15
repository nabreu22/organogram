import "./TextField.css";

const TextField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.whenModified(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTyped}
        required={props.mandatory}
        placeholder={placeholderModified}
      />
    </div>
  );
};

export default TextField;
