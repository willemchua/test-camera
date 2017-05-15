import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { ActionTypes } from '../../const/action';

export interface State{
    menu:number[];
}

const initialState = {
    menu:[0, 1, 2, 3]
}

export function reducer(state: State = initialState, action: Action){
    switch(action.type){
        case ActionTypes.UPDATE_MENU:
            let updateState: State = {
                menu: action.payload
            }
            return updateState;
        default:
            return state;
    }
}