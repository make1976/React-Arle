import React from 'react'

export const Greeter= (props)=> {
    return (
        <h1>
            Hello, {props.first} {props.last}
        </h1>
    );
}

