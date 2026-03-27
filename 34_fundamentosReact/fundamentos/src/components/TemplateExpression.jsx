// 4 - template expression

const TemplateExpression = () => {
  const name = "Amanda";

  const data = {
    age: 25,
    job: "Programador(a)",
  };

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Bem vindo(a) {name}</h3>
      <p>
        Sua idade é {data.age} anos, e você é um(a) {data.job}.
      </p>
    </div>
  );
};

export default TemplateExpression;
