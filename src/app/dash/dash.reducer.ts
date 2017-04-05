import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { Employee } from '../shared/interfaces';
import { ActionTypes } from '../actions/action';

export interface State{
    maleEmployee:number,
    femaleEmployee:number,
}

const initialState = {
    maleEmployee: 0,
    femaleEmployee: 0,
}

export function reducer(state: Employee = initialState, action: Action){
    switch(action.type){
        case ActionTypes.UPDATE_EMP:
            let updateState: Employee = {
                maleEmployee: action.payload[0],
                femaleEmployee: action.payload[1],
            }
            return updateState;
        default:
            return state;
    }
}