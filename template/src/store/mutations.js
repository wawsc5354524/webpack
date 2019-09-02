export default {
    changeName(state, data) {
        state.name = data;
        try {
            localStorage.name = data;
        } catch (e) {}
    }
};
