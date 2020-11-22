const initialState = {
    menu: [],
    loading: true,
    error: false,
    selectedCountry: 'Afghanistan',
    confirmed: 0,
    totalConfirmed: 0,
    deaths: 0,
    totalDeaths: 0,
    recovered: 0,
    totalRecovered: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true,
            };
        case 'MENU_SUBMITTED':
            return {
                ...state,
                loading: false,
                selectedCountry: action.payload.Country,
                confirmed: action.payload.NewConfirmed,
                totalConfirmed: action.payload.TotalConfirmed,
                deaths: action.payload.NewDeaths,
                totalDeaths: action.payload.TotalDeaths,
                recovered: action.payload.NewRecovered,
                totalRecovered: action.payload.TotalConfirmed,
            }
        default:
            return state;
    }
}

export default reducer;