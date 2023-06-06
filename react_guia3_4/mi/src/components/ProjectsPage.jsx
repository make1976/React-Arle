
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Mary',
    lastName: 'Caro Gutierrez'
};

const ProjectsPage2 = () => {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

export default ProjectsPage2