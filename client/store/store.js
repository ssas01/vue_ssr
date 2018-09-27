import Vuex from 'vuex'
import Vue from 'vue'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default ()=>{
    const store = new Vuex.Store({
        strict: isDev,
        state: defaultState,
        mutations,
        getters,
        actions
    })
    
    if(module.hot){
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './getters/getters',
            './actions/actions'
        ],()=>{
           const newState = require('./state/state').default;
           const mutations = require('./mutations/mutations').default; 
           const getters = require('./getters/getters').default; 
           const actions = require('./actions/actions').default; 

           store.hotUpdate({
            state: newState,
            mutations,
            getters,
            actions
           })
        })
    }
    return store;
}
