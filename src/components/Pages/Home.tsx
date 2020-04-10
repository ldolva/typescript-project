import React, { useState, useEffect } from "react";
import { NavBarEnum } from "../../utils/enums";
import { db } from "../../firebase/firebaseSetup";
import { getPersonList } from "../../firebase/firebaseSetup";
import axios from "axios";
import Container from "@material-ui/core/Container";

const Home: React.FC = () => {
  interface IPersoner {
    name: string;
    city: string;
  }

  const [persons, setPersons] = useState<IPersoner>({
    name: "",
    city: "",
  });

  interface IUsers {
    name: string;
    id: number;
  }
  const [users, setUsers] = useState<IUsers[]>([]);

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   getPersonList("bRirq2oHwCFr5afX68mB").then((personList) => {
  //     if (personList.exists) {
  //       //const test = personList.data();
  //       // setPersons(test);
  //     } else {
  //       console.log("not found");
  //     }
  //   });
  // }, []);

  return (
    <Container style={{ textAlign: "center" }}>
      <h1 style={{ color: "#f6c90e" }}>{NavBarEnum.Home}</h1>
      <ul style={{ listStyleType: "none" }}>
        {users.map((user) => (
          <li key={user.id} style={{ color: "white" }}>
            {user.name}
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Home;
