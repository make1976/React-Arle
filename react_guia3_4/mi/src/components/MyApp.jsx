function MyInput() {
    return (
        <input type="text" />
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyInput />
            <AboutPage />
            <Profile />
        </div>
    );
}


function AboutPage() {
    return (
        <>
            <h1> About</h1>
            <p>Hello there.<br />How do you do? </p>
        </>
    );
}

const user = {
    name: 'Marielly Gutierrez',
    imageUrl: 'https://www.topgear.com/sites/default/files/2023/02/2017-Dodge-Viper-ACR-VoooDoo-II-Edition1334280_.jpg',
    imageSize: 500,
};

function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize + 200,
                height: user.imageSize
            }}
        />
        </>
    );
}




