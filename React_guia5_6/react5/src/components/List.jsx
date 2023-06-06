import { ropa } from "../data/Array";

export default function List() {
    const listItems = ropa.map((prendas, key) =>
        <li key={key}>{prendas}</li>
    );
    return <ul>{listItems}</ul>;
}