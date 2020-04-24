
export default {
    state: {
        num: '123'
    },
    reducers: {
        save: (state, payload) => ({ ...state, ...payload }),
    },
    effects: {
        async test() {
            await console.log('test')
        }
    },
};
