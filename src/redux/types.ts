import { IComic } from "../dto/IComic";

export const ADD_COMICS_TO_SEND = "ADD_COMICS_TO_SEND";
export const REMOVE_COMICS_TO_SEND = "REMOVE_COMICS_TO_SEND"; 
export const CLEAN_COMICS_TO_SEND = "CLEAN_COMICS_TO_SEND"; 
export const REFRESH_LIST = "REFRESH_LIST";
export const FILTER = "FILTER"; 
export const CLEAN_FILTER = "CLEAN_FILTER"; 






export  interface AddComicsToSendAction{
    type: typeof ADD_COMICS_TO_SEND;
    payload:IComic;
}

export  interface RemoveComicsToSendAction{
    type: typeof REMOVE_COMICS_TO_SEND;
    payload:IComic;
}

export  interface CleanComicsToSendAction{
    type: typeof CLEAN_COMICS_TO_SEND;
    payload:IComic;
}

export  interface RefreshListAction{
    type: typeof REFRESH_LIST;
    payload:IComic;
}

export  interface FilterAction{
    type: typeof FILTER;
    payload:string;
}

export  interface CleanFilterAction{
    type: typeof CLEAN_FILTER;
    payload:string;
}

export interface ComicState{
    comicsToSend: Array<IComic>,
    refreshList: boolean,
    filter: string
}



export type ComicTypes = AddComicsToSendAction | 
                        RemoveComicsToSendAction | 
                        CleanComicsToSendAction |
                        RefreshListAction |
                        FilterAction |
                        CleanFilterAction
