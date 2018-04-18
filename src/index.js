import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

injectGlobal`
    *,
    *::after,
    *::before {
        margin: 0 auto;
        padding: 0;
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
        color: black;
        max-width: 600px;
        width: 100vw;
        min-width: 250px;
        height: 100vh;
    }
    body {
        box-sizing: border-box;
        position: relative;
        height: 100vh;
    }

    #root {
        height 100vh;
    }
`

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
