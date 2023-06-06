import { Button } from "react-bootstrap";

export function Button2({onClick, children}){
    return (
        <Button variant="success" onClick={onClick}>
            {children}
        </Button>
    );
}