import "./Form.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const whenSaving = (event) => {
    event.preventDefault();
    props.toNewEmployeeAdded({
      name,
      position,
      image,
      team,
    });
  };
  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Fill out the form to create the employee's card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Type your name"
          value={name}
          whenModified={(value) => setName(value)}
        />

        <TextField
          required={true}
          label="Position"
          placeholder="Type your position"
          value={position}
          whenModified={(value) => setPosition(value)}
        />
        <TextField
          required={true}
          label="Image"
          placeholder="Type the image address"
          value={image}
          whenModified={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Team"
          items={props.teams}
          value={team}
          whenModified={(value) => setTeam(value)}
        />

        <Button>New card</Button>
      </form>
    </section>
  );
};

export default Form;
