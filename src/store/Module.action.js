export const SET_USER = 'SET_USER';
export const SET_ORDER_PENDING = 'SET_ORDER_PENDING';
export const SET_SALEOFF = 'SET_SALEOFF';

export const setUser = (data) => ({
    type: SET_USER,
    payload: data,
})

export const setOrderPending = (data) => ({
    type: SET_ORDER_PENDING,
    payload: data,
})

export const setSaleOff = (data) => ({
    type: SET_SALEOFF,
    payload: data,
})