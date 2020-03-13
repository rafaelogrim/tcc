export const login = (form) => async (dispatch) => {



};

export const checkAuth = (path) => async (dispatch) => {
    dispatch({type: SHOW});
    try {
        const {payload} = await API.isAuthenticated();
        dispatch({type: SAVE, payload});
        if (path) {
            const authorized = payload.paths.find((e) => e.path === path);
            if (!authorized) {
                window.location.href = `/404`;
                return false
            }
        }
        return payload
    } catch (e) {
        if (path) window.location.href = `/login?redirect=${path}`;
        throw e;
    }
};
