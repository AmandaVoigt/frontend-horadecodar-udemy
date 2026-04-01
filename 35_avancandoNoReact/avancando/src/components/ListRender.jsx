import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Amanda", "Matheus", "Maria", "Amanda"]);

  const [users] = useState([
    { id: 1, name: "Amanda", age: 25 },
    { id: 2, name: "Matheus", age: 30 },
    { id: 3, name: "Maria", age: 28 },
  ]);

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
    </div>
  );
};

export default ListRender;