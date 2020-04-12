export const state = () => ({
    currentPage: 'home',
    loading: false,
    locales: ['en', 'de'],
    locale: 'de',
});

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    SET_PREVIEW_COLOR(state, color) {
        state.previewColor = color;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_PAGE(state, currentPage) {
        state.currentPage = currentPage;
    },
};
