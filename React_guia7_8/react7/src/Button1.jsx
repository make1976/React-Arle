import { Button } from "react-bootstrap";

function handleClick() {
    alert('Hola he clickeado');
}

export default function Button1() {
    return (
        <div className="container">
            <Button variant="primary" onClick={handleClick}>de click aqui!</Button>
        </div>
    )
}