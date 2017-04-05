import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { Book } from '../../../../shared/interfaces';
import { Search } from '../../../../shared/interfaces';
import { Employee } from '../../../../shared/interfaces';

export interface State{
    counter: number,
    name: string
}

const initialState = {
    counter: 0,
    name: ''
}

export function reducer(state:State = initialState, action:Action){
    switch(action.type){
        case "INCREMENT":
            {
                let newState = {counter: state.counter++, name: state.name}
                return newState;
            }
        case "DECREMENT":
            {
                let newState = {counter: state.counter--, name: state.name}
                return newState;
            }
        case "RESET":
            {
                let newState = {counter: 0, name: state.name}
                return newState;
            }
        case "UPDATE_PROFILE_NAME":
            {
                let newState = {counter: state.counter, name: action.payload}
                return newState;
            }
        case "RESET_NAME":
            {
                let newState = {counter: state.counter, name: ''}
                return newState;
            }
        default:
            return state;
    }
}