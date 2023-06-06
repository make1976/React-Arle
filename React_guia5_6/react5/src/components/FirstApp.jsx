import {PropTypes} from "prop-types";

export const FirstApp = ({title, subTitle, subTitle2})=> {
    return(
        <>
        <h1>{ title}</h1>
        <h2>{ subTitle}</h2>
        <h2>{ subTitle2}</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    subTitle2: PropTypes.string
}

FirstApp.deafaultProps = {
    subTitle2 : "NO HAY SUBTITULO 2"
}
 