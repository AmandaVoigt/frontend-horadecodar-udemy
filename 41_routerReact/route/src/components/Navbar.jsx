// Importa o componente NavLink da biblioteca react-router-dom
// Ele serve para criar links de navegação entre páginas (rotas)
import { NavLink } from "react-router-dom";

// Importa o arquivo de estilo CSS específico desse componente
// Tudo que estiver em Navbar.css pode afetar a aparência desse componente
import "./Navbar.css";

// Cria um componente funcional chamado Navbar
// Esse componente representa uma barra de navegação (menu)
const Navbar = () => {
  
  // O return define o que será renderizado na tela
  return (
    
    // Uma div (container) que envolve todos os elementos da navbar
    <div>

      {/* 
        Esse trecho está comentado (não está sendo executado)
        Aqui você usava o Link ao invés do NavLink
        
        Diferença importante:
        - Link: só navega
        - NavLink: navega E sabe se está ativo (página atual)
      */}

      {/* <Link to="/">Home</Link><br />
      <Link to="/contact">Contatos</Link> */}

      {/* 
        NavLink que leva para a rota "/"
        Ou seja, a página principal (Home)
      */}
      <NavLink 
        
        // Define para onde o link vai levar quando clicado
        to="/"

        // className aqui não é uma string fixa!
        // É uma função que recebe um objeto com informações do link
        
        // isActive = true quando você está nessa rota
        // isActive = false quando não está
        
        // Se estiver ativo → aplica a classe "active"
        // Se não → não aplica nada
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {/* Texto que aparece para o usuário */}
        Home
      </NavLink>

      {/* Quebra de linha (tipo um ENTER visual) */}
      <br />

      {/* Outro NavLink, agora para a página de contatos */}
      <NavLink
        
        // Quando clicar, vai para "/contact"
        to="/contact"

        // Mesma lógica do anterior:
        // adiciona classe "active" se estiver nessa rota
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {/* Texto exibido */}
        Contatos
      </NavLink>

    </div>
  );
};

// Exporta o componente para poder usar em outros arquivos
export default Navbar;