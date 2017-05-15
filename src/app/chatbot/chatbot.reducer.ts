import { ActionReducer, Action, combineReducers } from '@ngrx/store';

export interface State{
    chat: string
}

const initialState = {
    chat: ''
}

export function reducer(state: State = initialState, action: Action){
    switch(action.type){
        case "UPDATE":
            let updateState = {
                chat: action.payload
            }
            return updateState;
        case "RESET":
            return initialState;
        default:
            return state;
    }
}