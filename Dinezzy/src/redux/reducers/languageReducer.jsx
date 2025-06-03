export const SET_LOCALE = "SET_LOCALE";

export const setLocale = (locale) => ({
  type: SET_LOCALE,
  payload: locale,
});

const initialState = {
  locale: "en",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};

