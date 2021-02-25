/**
 Index component

 responsible for rendering the DOM
 */

import * as serviceWorker from './serviceWorker';
import rerenderEntireDom from "./render"
import state from './redux/state'

rerenderEntireDom(state);

serviceWorker.unregister();
