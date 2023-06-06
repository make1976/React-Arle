import { Button2 } from './Button2';

export default function Toolbar({ onPlayMovie, onUploadImage}) {
   return (
    <>
    <div>
        <Button2 onClick={onPlayMovie}>
            Cargar pelicula
        </Button2> {" "}

        <Button2 onClick={onUploadImage}>
            Cargar Imagen
        </Button2>
    </div>
    </>
   );
}

