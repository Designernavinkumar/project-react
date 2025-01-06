import React from 'react';

function Logout (props){
    return (
        <div>
            <h1>hello exit with logout</h1>
            <button onClick={props.onClick}>Logout</button>
        </div>
    )
}
export default Logout;