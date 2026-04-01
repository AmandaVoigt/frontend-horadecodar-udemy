import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Amanda", "Matheus", "Maria", "Amanda"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Amanda", age: 25 },
    { id: 2, name: "Matheus", age: 30 },
    { id: 3, name: "Maria", age: 28 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id),
    );
  };

  return (
    <div>
      {/* render sem key (não recomendado) */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* render com key (recomendado) */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - previous state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
