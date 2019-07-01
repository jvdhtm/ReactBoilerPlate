import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import ReduxStore from './reduxStore';
import GlobalStyle from './themes/default/globalStyle';
import Spritemap from './themes/default/Spritemap';

ReactDOM.render(
    <>
        <Spritemap/>
        <GlobalStyle />
        <ReduxStore>
            <App />
        </ReduxStore>
    </>,
    document.getElementById('root')
);
