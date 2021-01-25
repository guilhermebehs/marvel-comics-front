import { CLEAN_FILTER } from './../types';
import {ADD_COMICS_TO_SEND,REMOVE_COMICS_TO_SEND, 
        CLEAN_COMICS_TO_SEND, REFRESH_LIST,
        FILTER,
        ComicTypes,ComicState} from '../types';

const initialState: ComicState={
    comicsToSend:[],
    refreshList: false,
    filter: ''
}

export default function comicReducers
    (state = initialState, action:ComicTypes):ComicState
{
    switch(action.type){

        case ADD_COMICS_TO_SEND: {
                return  {
                ...state,
                comicsToSend:[...state.comicsToSend,action.payload]
            }
        }

        case REMOVE_COMICS_TO_SEND: {
            return  {
            ...state,
            comicsToSend: state.comicsToSend.filter((comic)=> comic.id !== action.payload.id)
        }
        }

        case CLEAN_COMICS_TO_SEND: {

            return  {
            ...state,
            comicsToSend: [],
        }
        }

        case REFRESH_LIST: {

            return  {
            ...state,
            refreshList: !state.refreshList,
        }
        }
        case FILTER: {

            return  {
            ...state,
            filter: action.payload,
        }
        }
        case CLEAN_FILTER: {

            return  {
            ...state,
            filter: '',
        }
        } 

        default:
            return state
    }
}