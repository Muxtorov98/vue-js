import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        async pushUser(context, data) {
            try {
                const response = await axios.post('/users', data);
                const user = {
                    "@id": response.data["@id"],
                    id: response.data.id,
                    email: response.data.email,
                    roles: response.data.roles,
                    createdAt: response.data.createdAt
                };
                context.commit('updateUser', user);
                console.log('user yaratildi');
            } catch (e) {
                console.log('user yaratishda xatolik yuz berdi');
            }
        }
    },

    mutations: {
        updateUser(state, user) {
            state.user = user
        }
    },

    state: {
        accessToken: localStorage.getItem('accessToken'),
        "@id": null,
        id: null,
        email: null,
        roles: null,
        createdAt: null
    },

    getters: {
        getUser(state) {
            return state.user
        },
        getAccessToken(state) {
            return state.accessToken
        }
    }

}