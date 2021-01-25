import {ADD_COMICS_TO_SEND,REMOVE_COMICS_TO_SEND, 
        CLEAN_COMICS_TO_SEND, REFRESH_LIST,
        ComicTypes,ComicState} from '../types';

const initialState: ComicState={
    comicsToSend:[],
    refreshList: false,
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

        default:
            return state
    }
}