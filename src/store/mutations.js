export const SET_DATALIST = (state, datalist) =>{
    state.datalist = datalist;
}

export const GO_TO_DETAIL = (state, { datalist }) =>{
    state.cart.push({
        datalist
    })
}