import React, { useState } from "react";

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

    const agregarColorExtra = () => {
        if (!luces.includes("purpura")) {
            setLuces([...luces, "purpura"]);
        }
    };

    return (
        <div className="contenedor-principal">
            <div className="poste"></div>
            <div className="cuerpo-semaforo">
                {luces.map((tipo) => (
                    <div
                        key={tipo}
                        className={"luz " + tipo + (color === tipo ? " brillo" : "")}
                        onClick={() => setColor(tipo)}
                    ></div>
                ))}
            </div>

            <div className="controles">
                <button onClick={alternarColor}>Siguiente Color</button>
                <button onClick={agregarColorExtra}>Modo Especial</button>
            </div>
        </div>
    );
};

export default Home;
