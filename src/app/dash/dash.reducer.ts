import { ActionReducer, Action, combineReducers } from '@ngrx/store';

import * as fromDashForm from './dash-form/dash-form.reducer';
import * as fromMenuForm from './menu-form/menu-form.reducer'; 

export interface State{
    dashForm: fromDashForm.State;
    menuForm: fromMenuForm.State;
}

const reducers = {
    dashForm: fromDashForm.reducer,
    menuForm: fromMenuForm.reducer
}

export const reducer: ActionReducer<State> = combineReducers(reducers);