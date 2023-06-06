import {recetas } from "../database/data";

export default function Recetas() {
    let filtro = "carnes"
    const carnes = recetas.filter(recetas =>
               recetas.carne == filtro
    );
    const listItems = recetas.map((carne, key) =>
        <li key={key}>
            <p>
                <b>{carne.nombre}:</b>
                {' ' + carne.categoria + ' '}
                            {carne.duracion}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}