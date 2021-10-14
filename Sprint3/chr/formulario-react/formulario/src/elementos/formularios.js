import styled from 'styled-components';

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}//objeto contenedor de colores

const formulario styled.form`
    display: grid;
    grid-template-colums: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;// 2 columnas responsive min 800px se vuelve 1 sola columna

