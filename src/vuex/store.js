import {createStore} from 'vuex';

export default createStore({
    state: {
        isActiveTab: 'agreement',
        isShowMenu: false,
        isShowMenuNav: false,
    },
    mutations: {
        updateIsActiveTab(state, tabId){
            state.isActiveTab = tabId;
        },
        updateShowModal(state, type){
            if(type === 'user'){
                state.isShowMenu = !state.isShowMenu;
            }else{
                state.isShowMenu = false;
            }
            if(type === 'nav'){
                state.isShowMenuNav = !state.isShowMenuNav;
            }else {
                state.isShowMenuNav = false;
            }
        },

    },
    actions: {

    },
    getters: {
        activeTab(state){
            return state.isActiveTab;
        },
        showModal(state){
            return state.isShowMenu;
        },
        showNav(state){
            return state.isShowMenuNav;
        }
    }
})