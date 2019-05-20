import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyDA0wctLWg3dtsID6t0dDPxGkJsDhpqwgU",
            authDomain: "whatsapp-clone-7ae0e.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-7ae0e.firebaseio.com",
            projectId: "whatsapp-clone-7ae0e",
            storageBucket: "whatsapp-clone-7ae0e.appspot.com",
            messagingSenderId: "577932150506"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
