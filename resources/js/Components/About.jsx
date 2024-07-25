// About.js
import React from "react";
import "../../css/about.css"; // Crearás este archivo CSS para los estilos
import aboutImg from "../../img/undraw_window_shopping_re_0kbm.svg";
import Logo from "./Logo";

const About = () => {
    return (
        <section id="about">
            <div className="about-banner">
                <div className="about-text">
                    <h1 className="mb-7">
                        ¿Quiénes <span>Somos?</span> <Logo></Logo>
                    </h1>
                    <p>
                        En Estilo Urbano, nos apasiona la moda y la creatividad.
                        Somos un equipo dedicado a traer lo mejor de la moda
                        contemporánea y vanguardista a tu guardarropa. Creemos
                        en la importancia de combinar estilo, comodidad y
                        calidad en cada prenda que ofrecemos.
                    </p>
                    <p className="mt-5">
                        Nuestro objetivo es inspirarte a expresar tu
                        personalidad única a través de la moda. Ya sea que
                        busques piezas elegantes para ocasiones especiales o
                        ropa cómoda para el día a día, en Estilo Urbano
                        encontrarás una colección cuidadosamente seleccionada
                        para satisfacer todas tus necesidades de estilo.
                    </p>
                    <p className="mt-5">
                        Únete a nosotros en este viaje de moda y descubre cómo
                        podemos ayudarte a definir y destacar tu estilo único.
                        En Estilo Urbano, no solo vendemos ropa, sino que
                        celebramos la individualidad y la autoexpresión.
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImg} alt="Quienes Somos" />
                </div>
            </div>
        </section>
    );
};

export default About;
