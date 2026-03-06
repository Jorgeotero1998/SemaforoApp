import React, { useState } from "react";
import "./index.css";

const TrafficLight = () => {
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
      <div className="escenario-calle">
        {/* Cartel de la calle lateral */}
        <div className="señal-calle">ONE WAY</div>

        {/* Cuerpo del semáforo */}
        <div className="cuerpo-semaforo">
          {luces.map((tipo) => (
            <div
              key={tipo}
              className={`luz ${tipo} ${color === tipo ? "encendida" : ""}`}
              onClick={() => setColor(tipo)}
            >
              <div className="reflejo"></div>
            </div>
          ))}
        </div>

        {/* Poste y Base */}
        <div className="poste-metalico"></div>
        <div className="base-suelo"></div>
      </div>

      <div className="controles">
        <button className="btn-gui" onClick={alternarColor}>
          Siguiente
        </button>
        <button className="btn-gui" onClick={gestionarModoEspecial}>
          {luces.includes("purpura") ? "Quitar Púrpura" : "Modo Especial"}
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
