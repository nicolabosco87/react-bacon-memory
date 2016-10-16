import { createStore } from 'redux'
import rootReducer from '../reducers/reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers', () => {
            const nextReducer = require('../reducers/reducers');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}



