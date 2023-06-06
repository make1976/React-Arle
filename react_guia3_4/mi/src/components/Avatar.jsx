
import { getImageUrl } from "./utils/utils";
function Avatar({ person, size }) {
    return (
        <img
            className="Avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
export default function Profile() {
    return (
        <>
            <div className="card">
                <Avatar size={100}
                    person={{ name: "Katsuko Saruhashi", imageId: "yfe0qp2", }}
                />{" "}
            </div>
            <div className="card">
                <Avatar size={100}
                    person={{ name: "Aklilu lemma", imageId: "0k567lh", }}
                />{" "}
            </div>
            <div className="card">
                <Avatar size={50} person={{ name: "Lin Lanying", imageId: "1bx5QH6", }}
                />
            </div>
        </>
    );
}