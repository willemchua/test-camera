import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { Search } from '../shared/interfaces';

export interface State{
    query:string,
    maxOutput:string
}

const initialState = {
    query: "",
    maxOutput: '3'
}

export function reducer(state: Search = initialState, action: Action){
    switch(action.type){
        case "UPDATE_QUERY":
            let stateUpdateQ: Search = {
                query: action.payload,
                maxOutput: state.maxOutput,
            }
            return stateUpdateQ;
        case "UPDATE_MAXRES":
            let stateUpdateM: Search = {
                query: state.query,
                maxOutput: action.payload,
            }
            return stateUpdateM;
        case "RESET":
            let initialState: Search = {
                query: "",
                maxOutput: '3'
            }
            return initialState;
        default:
            return state;
    }
}