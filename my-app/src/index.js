import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Show from './gun/index';
import {createStore} from 'redux';
import {counter} from './gun/Gun.reducer'
import { addGUN, removeGUN } from './gun/Gun.reducer';

const store = createStore(counter,10);

store.subscribe(render);

render();
function render() {
    ReactDOM.render(<Show store={store} addGun={addGUN} removeGun={removeGUN} />, 
        document.getElementById('root'));
}

registerServiceWorker();
