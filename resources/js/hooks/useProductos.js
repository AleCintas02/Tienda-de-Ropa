import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductos = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetchProductos(currentPage, selectedCategory);
        fetchCategorias();
    }, [currentPage, selectedCategory]);

    const fetchProductos = (page, categoriaId) => {
        axios.get(`/api/productos?page=${page}&categoria_id=${categoriaId || ''}`)
            .then(response => {
                setProductos(response.data.data);
                setCurrentPage(response.data.current_page);
                setLastPage(response.data.last_page);
            })
            .catch(error => {
                console.error("Hubo un error al obtener los productos:", error);
            });
    };

    const fetchCategorias = () => {
        axios.get('/api/categorias')
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error("Hubo un error al obtener las categorías:", error);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (categoriaId) => {
        setSelectedCategory(categoriaId);
        setCurrentPage(1); // Resetear a la primera página
    };

    return {
        productos,
        categorias,
        currentPage,
        lastPage,
        selectedCategory,
        handlePageChange,
        handleCategoryChange,
    };
};

export default useProductos;