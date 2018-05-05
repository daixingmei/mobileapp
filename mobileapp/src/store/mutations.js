import getters from './getters'

const state = {
    nav: true,
    footerShow: true,
    loadingshow: false,
    username: '未登录',
    getusername: '',
    getpassword: ''
};
const mutations = {
    ShowHeader(state) {
        state.nav = true
    },
    HideHeader(state) {
        state.nav = false;
    },
    HideFooter(state) {
        state.footerShow = false

    },
    ShowFooter(state) {
        state.footerShow = true
    },
    loadingShow(state) {
        state.loadingshow = true
    },
    loadingHide(state) {
        state.loadingshow = false
    },
    UserName(state, res1, res2) {
        state.username = res1
        console.log(res1)
        console.log(res2)
            // alert(state.username)
    },
    getusername(state, res) {
        state.getusername = res
    },
    getpassword(state, res) {
        state.getpassword = res
    },
};

export default {
    state,
    mutations,
    getters,
}
