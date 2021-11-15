import {ActionTypes} from '../contants/action-types'

export const setItems = (items) => {
    return {
        type: ActionTypes.SET_ITEMS,
        payload: items,
    };
};
export const delItems = () => {
    return {
        type: ActionTypes.DEL_ITEMS
    };
};

// Resultados de búsqueda
export const setResults = (results) => {
    return {
        type: ActionTypes.SET_RESULTS,
        payload: results,
    };
};
export const delResults = () => {
    return {
        type: ActionTypes.DEL_RESULTS
    };
};
// Configurar texto de búsqueda
export const setSearch = (text) => {
    return {
        type: ActionTypes.SET_SEARCH,
        payload: text,
    };
};
// Borrar búsqueda
export const delSearch = () => {
    return {
        type: ActionTypes.DEL_SEARCH
    };
};


// Item seleccionado
export const selectedItem = (item) => {
    return {
        type: ActionTypes.SELECTED_ITEM,
        payload: item,
    };
};

export const removeSelectedItem = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ITEM
    };
};
