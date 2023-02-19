export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item,
    };
};

//? delete item
export const DLT = (id) => {
    return {
        type: "REMOVE_CART",
        payload: id,
    };
};

//? remove  item
export const REMOVE = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item,
    };
};
