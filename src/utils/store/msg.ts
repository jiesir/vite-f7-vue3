import { defineStore } from 'pinia';


export const useStore = defineStore({
    id: 'main',
    state: () => ({
        userInfo: { name: '张三', age: 28 },
        msg: "Vite + Vue3 + Framework7搭建的h5工程，用户体验极好！！！"
    }),
    getters: {
        getUserInfo: (state) => {
            console.log('getUserInfo 调用了')
            return state.userInfo
        },
        getMsg: (state) => {
            console.log('getUserInfo 调用了')
            return state.msg
        },
    },
    actions: {
        changeState(name: string, age: number) {
            this.$patch(state => {
                state.userInfo.name = name
                state.userInfo.age = age
            })
        }
    },
})
