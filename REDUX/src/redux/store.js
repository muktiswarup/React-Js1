/* import {createStore} from "redux"
import { messageReducer } from "./Messages/message.reducer"
let store=createStore(messageReducer)
export{store} */

import { createStore } from "redux";
import { messageReducer } from "./Messages/message.reducer";

let store = createStore(messageReducer);

export { store };
