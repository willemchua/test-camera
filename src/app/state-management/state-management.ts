import { ActionReducer, Action } from '@ngrx/store';

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