import React, { useState, useEffect } from "react";
import "./Navigation.css"; // Importe seu arquivo de estilos CSS

const Nav: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define 768 como o limite para dispositivos móveis, você pode ajustar conforme necessário
    };

    // Adiciona um event listener para detectar alterações no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Verifica o tamanho da tela quando o componente é montado
    handleResize();

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    if (targetId !== null) { // Verifica se targetId não é nulo
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className={isMobile ? "mobile-nav" : ""}
      style={{
        borderBottom: "1px solid #ccc",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        overflowY: isMobile ? "scroll" : "hidden", // Adiciona overflowY: scroll apenas em dispositivos móveis
        WebkitOverflowScrolling: "touch", // Ativa o scroll suave em dispositivos iOS
        maxHeight: isMobile ? "calc(100vh - 100px)" : "auto", // Define a altura máxima apenas em dispositivos móveis
      }}
    >
      <img
      src="src/assets/corinthians.jpg"
        alt="Logo"
        style={{ marginRight: "10px", height: "40px" }}
      />
      <span style={{ marginRight: "auto" }}>
        <h4 className="h1-header" style={{ margin: 0 }}>
          {" "}
          Corinthians
        </h4>
      </span>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="#story" onClick={handleNavClick}className="h1-header">
            História
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="#camisas" onClick={handleNavClick}className="h1-header">
            Camisas
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <a href="#moletons" onClick={handleNavClick}className="h1-header">
            Moletons
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
