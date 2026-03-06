import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

const Home = () => {
  const [color, setColor] = useState("roja");
  const [luces, setLuces] = useState(["roja", "amarilla", "verde"]);

  const alternarColor = () => {
    if (color === "roja") setColor("verde");
    else if (color === "verde") setColor("amarilla");
    else if (color === "amarilla") {
      if (luces.includes("purpura")) setColor("purpura");
      else setColor("roja");
    } else if (color === "purpura") {
      setColor("roja");
    }
  };

  const gestionarModoEspecial = () => {
    if (luces.includes("purpura")) {
      setLuces(["roja", "amarilla", "verde"]);
      if (color === "purpura") setColor("roja");
    } else {
      setLuces([...luces, "purpura"]);
    }
  };

  return (
    <div className="contenedor-principal">
      <div className="escenario">
        <div className="cartel-calle">AV. CENTRAL</div>
        <div className="cuerpo-semaforo">
          {luces.map((tipo) => (
            <div key={tipo} className="slot-luz">
              <div className="visera"></div>
              <div
                className={"luz " + tipo + (color === tipo ? " brillo" : "")}
                onClick={() => setColor(tipo)}
              >
                <div className="reflejo"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="poste-vertical"></div>
        <div className="base-suelo"></div>
      </div>

      <div className="controles">
        <button className="btn-interfaz" onClick={alternarColor}>
          Siguiente Color
        </button>
        <button
          className="btn-interfaz especial"
          onClick={gestionarModoEspecial}
        >
          {luces.includes("purpura") ? "Modo Normal" : "Modo Especial"}
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Home />);
