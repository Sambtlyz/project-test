import axios from 'axios';

export const getdataList = ({ commit }) =>{
    axios.get('http://localhost:8081/api/v2/datalist').then(response =>{
        commit('SET_DATALIST', response.data);
    })
}

export const gotoDetail = ({ commit }, { datalist}) =>{
    commit('GO_TO_DETAIL', {datalist});
}

