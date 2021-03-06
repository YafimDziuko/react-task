import { createStore, compose, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { SORT, ACTIONS, INITIAL_STATE } from './constants/app-constants';

export function reducers (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.RETURN_TO_MAIN_PAGE: {
                state = { 
                    ...state,
                    fullItem: {
                        isActive: false
                    }
                }
                break;
        }
        case ACTIONS.UPDATE_INPUT_VALUE: {
            state = { 
                ...state,
                inputValue: action.value
            }
            break;
        }
        case ACTIONS.RESET_INPUT_VALUE: {
            state = { 
                ...state,
                inputValue: ""
            }
            break;
        }
        case ACTIONS.SEARCH: {
            state = {
                ...state,
                results: action.results,
                resultsCount: action.results.total,
                searchInfo: {
                    search: state.search,
                    value: state.inputValue
                }
            }
            break;
        }
        case ACTIONS.SWITCH_SEARCH: {
            state = {
                ...state,
                search: action.search
            }
            break;
        }
        case ACTIONS.SWITCH_SORT: {
            state = { 
                ...state,
                sort: action.sort,
                results: action.results,
            }
            break;
        }
        case ACTIONS.FULL_FILM_LOAD: {
            state = {
                ...state,
                fullItem: {
                    isActive: true,
                    filmData: action.filmData
                }
            }
            break;
        }
    }
    return state;
}

const reducer = persistReducer({key: 'root', storage },reducers);
const store = createStore(reducer, compose(applyMiddleware(thunk)));
let persistor = persistStore(store);
export { store, persistor };