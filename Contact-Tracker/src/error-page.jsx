import React from 'react';

import { useRouteError } from 'react-router-dom';

export default function ErrorPage () {
    const error = useRouteError();
    console.log(error)
    return (
        <div id='error-page'>
             <h1>Opps !</h1>
             <p>Sorry Error Occured</p>
             <p>
                <i>{error.statusText || error.message}</i>
             </p>
        </div>
    )
}