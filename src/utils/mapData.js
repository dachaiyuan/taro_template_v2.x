
/**
 * 
 * @param {Array} modelNames models名称
 * @param {String} componentName 组件名称
 * @description 使用此方法，注意models之间effects命名不能重名
 */

export default function mapData(modelNames = [], componentName) {
    const mapState = state => {
        let res = { loading: {} };
        modelNames.forEach((modelName) => {
            res[modelName] = state[modelName];
            Object.assign(res.loading, state.loading.effects[modelName]);
        });
        return res;
    }
    const mapDispatch = dispatch => {
        let res = { dispatch };
        modelNames.forEach((modelName) => {
            //用于初始化数据
            if (dispatch[modelName].init) dispatch[modelName].init(componentName);
            Object.assign(res.dispatch, dispatch[modelName]);
        });
        return res;
    }
    return [
        mapState,
        mapDispatch
    ]
}