import {createStore} from 'vuex';

export default createStore({
    state: {
        isActiveTab: 'agreement',
    },
    mutations: {
        updateIsActiveTab(state, tabId){
            state.isActiveTab = tabId;
        }
    },
    actions: {
        // changeTab({commit}, state){
        //     state.isActiveTab = !state.isActiveTab;
        //
        //     commit('updateIsActiveTab', state.isActiveTab);
        // }
    },
    getters: {
        activeTab(state){
            return state.isActiveTab;
        }
    }
})