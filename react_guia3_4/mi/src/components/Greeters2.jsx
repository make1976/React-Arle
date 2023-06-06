export const Greeter2 = ({ first, last, estado }) => {
    return (
        <p>
            Hello, {first} tiene {last} años y esta {(estado) ? "Activo" : "inactivo"} en el sistema
        </p>
    );
}