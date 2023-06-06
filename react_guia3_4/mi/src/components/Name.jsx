import AdminPanel from './AdminPanel'
import LoginForm from './LoginForm'

/*export default function Name() {
    let isLoggedIn = false;
    let content;

    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }


    return (
        <div>
            {content}
        </div>
    );
}
*/
// isLoggedIn ? ( <AdminPanel /> ) : ( <LoginForm /> ) 
export default function Name() {
    let isLoggedIn = false;
    let content;

    return (
        <div>
            isLoggedIn ? ( <AdminPanel />) : ( <LoginForm />)
        </div>
    );
}

