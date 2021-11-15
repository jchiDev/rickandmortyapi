import { ActionTypes } from "../contants/action-types";

const initialState = {
    items: [],
    info: [],
    results: [],
    search: '',
};

export const itemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            return {...state, items: payload.results, info: payload.info };
        case ActionTypes.DEL_ITEMS:
            return {...state, items: [], info: []};
        case ActionTypes.SET_RESULTS:
            return {...state, results: payload.results };
        case ActionTypes.DEL_RESULTS:
            return {...state, results: []};
        case ActionTypes.SET_SEARCH:
            return {...state, search: payload};
        case ActionTypes.DEL_SEARCH:
            return {...state, search: ''};
        default:
            return state;
    }
};

export const selecteditemReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_ITEM:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_ITEM:
            return {};
        default:
            return state;
    }
};