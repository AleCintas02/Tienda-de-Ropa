import React from "react";
import "../../css/banner.css";
import PrimaryButton from "./PrimaryButton";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="contenedor-titulo-banner">
                    <h1>Estilo Urbano</h1>
                    <p>
                    Bienvenidos a Estilo Urbano, tu destino para moda contemporánea y vanguardista. Descubre prendas que combinan estilo, comodidad y calidad. ¡Explora tu estilo único con nosotros!
                    </p>
                    <PrimaryButton className="mt-4">CONTACTO</PrimaryButton>
                </div>
            </div>
        </>
    );
}

export default Banner;
