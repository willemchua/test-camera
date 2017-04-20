import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import * as fromBookSearch from './book-search/book-search.reducer';
import * as fromDash from './dash/dash.reducer';
import * as fromStateManagement from './state-management/subcomponent/subsubcomponent/subsubsubcomponent/subsubsubcomponent.reducer';
import * as fromChatbot from './chatbot/chatbot.reducer'

export interface State{
    bookSearchState: fromBookSearch.State,
    dashState: fromDash.State,
    stateManagementState: fromStateManagement.State,
    chatbotState: fromChatbot.State,
}

const reducers = {
    bookSearchState: fromBookSearch.reducer,
    dashState: fromDash.reducer,
    stateManagementState: fromStateManagement.reducer,
    chatbotReducer: fromChatbot.reducer
}

export const reducer: ActionReducer<State> = combineReducers(reducers);