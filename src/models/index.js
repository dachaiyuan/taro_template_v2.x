
import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import global from './global'

const loading = createLoadingPlugin({});
const store = init({
    models: {
        global,
    },
    plugins: [loading],
});
export default store;