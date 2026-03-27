import React from "react";

const Events = () => {
  const handleClique = (e) => {
    console.log(e);
    console.log("Executou");
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
        Clique aqui
      </button>
      </div>
      {/* 7 - evento com função */}
      <div>
        <button onClick={handleClique}>Clique aqui - com função</button>
      </div>
    </div>
  );
};

export default Events;
