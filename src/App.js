import { useState } from "react";
import Banner from "./components/Banner";

import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
  ];
  const [employees, setEmployees] = useState([]);

  const toNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        toEmployeeAdded={(employee) => toNewEmployeeAdded(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees}
        />
      ))}
    </div>
  );
}

export default App;
