import { ActionReducer, Action } from '@ngrx/store';
import { Book } from '../shared/interfaces';
import { ISearch } from '../shared/page.interface';


const initialState = {
    query: "",
    maxOutput: 0
}

export function counterReducer(state:number = 0, action:Action){
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return state = 0;
        default:
            return state;
    }
}

export function profileNameReducer(state:string = "profilename", action:Action){
    switch(action.type){
        case "UPDATE_PROFILE_NAME":
            return state = action.payload.newState;
        case "RESET_NAME":
            return state = "";
        default:
            return state;
    }
}

export function searchReducer(state: ISearch = initialState, action: Action){
    switch(action.type){
        case "UPDATE_QUERY":
            let stateUpdateQ: ISearch = {
                query: action.payload,
                maxOutput: state.maxOutput,
            }
            return stateUpdateQ;
        case "UPDATE_MAXRES":
            let stateUpdateM: ISearch = {
                query: state.query,
                maxOutput: action.payload,
            }
            return stateUpdateM;
        case "RESET":
            let initialState: ISearch = {
                query: "",
                maxOutput: 0
            }
            return initialState;
        default:
            return state;
    }
}

export function youtubeSearchReducer(state:string = "", action:Action ){
    switch(action.type){
        case "UPDATE_Y_QUERY":
            state = action.payload.q;
            return state;

    }
}