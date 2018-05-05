export default {
    ShowHeader: ({
        commit
    }) => {
        commit('ShowHeader')
    },
    HideHeader: ({
        commit
    }) => {
        commit('HideHeader')
    },
    ShowFooter: ({
        commit
    }) => {
        commit('ShowFooter')
    },
    HideFooter: ({
        commit
    }) => {
        commit('HideFooter')
    },
    loadingHide: ({
        commit
    }) => {
        commit('loadingHide')
    },
    loadingShow: ({
        commit
    }) => {
        commit('loadingShow')
    },
    UserName: ({
        commit
    }, res1, res2) => {
        commit('UserName', res1, res2)
    },
    getusername: ({
        commit
    }, res) => {
        commit('getusername', res)
    },
    getpassword: ({
        commit
    }, res) => {
        commit('getpassword', res)
    }
}
