import comicReducer from './comicReducer';
import {combineReducers} from "redux";


 const rootReducer = combineReducers({
    comic: comicReducer,
  })

export default rootReducer;



