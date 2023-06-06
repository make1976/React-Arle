import { getImageUrl } from "../help/utils";
import { ropa as prendas } from "../database/data";

export default function Listropa() {
    let filtro = "Erotica"
    const Erotica = prendas.filter(ropa =>
        ropa.Erotica == filtro
    );
    const listItems = prendas.map((ropa, key) =>
        <li key={key}>
            <img 
                src={ropa.imageId}
                alt={ropa.name}
            />
            <p>
                <b>{ropa.name}:</b>
                {' ' + ropa.categoria + ' '}
                known for {ropa.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}