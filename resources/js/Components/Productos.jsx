import React from "react";
import "../../css/productos.css";
import remera from "../../img/remera.jpg";
import PrimaryButton from "./PrimaryButton";
import useProductos from "../hooks/useProductos"; // Asegúrate de usar la ruta correcta

function Productos() {
    const {
        productos,
        categorias,
        currentPage,
        lastPage,
        selectedCategory,
        handlePageChange,
        handleCategoryChange
    } = useProductos();

    return (
        <section id="productos">
            <div className="contenedor-titulo">
                <h2 className="titulo-seccion">Productos</h2>
            </div>
            <div className="filtro-categorias">
                <h3>Categorías</h3>
                <ul>
                    <li
                        key="all"
                        onClick={() => handleCategoryChange(null)}
                        className={!selectedCategory ? "active" : ""}
                    >
                        Todos
                    </li>
                    {categorias.map(categoria => (
                        <li
                            key={categoria.id}
                            onClick={() => handleCategoryChange(categoria.id)}
                            className={selectedCategory === categoria.id ? "active" : ""}
                        >
                            {categoria.nombre}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="contenedor-productos">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <img src={producto.imagen || remera} alt={producto.nombre} className="producto-imagen" />
                        <h3 className="producto-nombre">{producto.nombre}</h3>
                        <p className="producto-precio">${producto.precio}</p>
                        <PrimaryButton className="mt-3">AÑADIR AL CARRITO</PrimaryButton>
                    </div>
                ))}
            </div>
            <div className="paginacion">
                {[...Array(lastPage)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Productos;
