// Importa dois hooks do React:
// useEffect → executa efeitos colaterais (ex: chamadas API)
// useState → guarda valores (estado)
import { useEffect, useState } from "react";

// Cria um custom hook chamado useFetch
// Ele recebe uma URL como parâmetro
export const useFetch = (url) => {

  // Estado que vai armazenar os dados vindos da API
  // começa como null (ainda não carregou nada)
  const [data, setData] = useState(null);

  // Estado para guardar a configuração da requisição (ex: POST)
  const [config, setConfig] = useState(null);

  // Estado que guarda o tipo de método HTTP (GET, POST, etc.)
  const [method, setMethod] = useState(null);

  // Estado usado como "gatilho" para refazer o fetch
  const [callFetch, setCallFetch] = useState(false);

  // Estado para indicar se está carregando
  const [loading, setLoading] = useState(false);

  // Estado para armazenar erro
  const [error, setError] = useState(null);

  // Função que configura requisições HTTP (ex: POST)
  const httpConfig = (data, method) => {

    // Se o método for POST
    if (method === "POST") {

      // Define a configuração da requisição
      setConfig({
        method: "POST",

        // Headers informam que estamos enviando JSON
        headers: {
          "Content-Type": "application/json",
        },

        // Converte o objeto JS em string JSON
        body: JSON.stringify(data),
      });

      // Salva o método
      setMethod(method);
    }
  };

  // useEffect para buscar dados (GET)
  useEffect(() => {

    // Função async interna (useEffect não pode ser async direto)
    const fetchData = async () => {
      try {

        // Ativa loading
        setLoading(true);

        // Faz a requisição GET para a URL
        const res = await fetch(url);

        // Converte resposta para JSON
        const json = await res.json();

        // Desativa loading
        setLoading(false);

        // Salva os dados
        setData(json);

      } catch (error) {

        // Mostra erro no console
        console.log(error.message);

        // Salva mensagem de erro para UI
        setError("Houve algum erro ao carregar os dados!");
      }
    };

    // Executa a função
    fetchData();

    // Esse efeito roda quando:
    // - a URL muda
    // - callFetch muda (ex: depois de um POST)
  }, [url, callFetch]);

  // useEffect para requisições como POST
  useEffect(() => {

    const httpRequest = async () => {

      let json;

      // Se for POST
      if (method === "POST") {

        // Ativa loading
        setLoading(true);

        // Cria array com parâmetros do fetch
        // [url, config]
        let fetchOptions = [url, config];

        // Executa fetch usando spread (...)
        const res = await fetch(...fetchOptions);

        // Converte resposta
        json = await res.json();

        // Desativa loading
        setLoading(false);
      }

      // Atualiza callFetch com resposta
      // Isso dispara o outro useEffect (GET)
      setCallFetch(json);
    };

    // Executa a função
    httpRequest();

    // Esse efeito roda quando:
    // - config muda
    // - method muda
    // - url muda
  }, [config, method, url]);

  // Retorna tudo que o componente vai usar
  return { data, httpConfig, loading, error };
};