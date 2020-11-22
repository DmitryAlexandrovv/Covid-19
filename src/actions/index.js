const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu,
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}

const menuOnError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const menuSubmitted = (country) => {
    console.log(country.Country)
    return {
        type: 'MENU_SUBMITTED',
        payload: country,
    }
}

export {
    menuLoaded,
    menuRequested,
    menuOnError,
    menuSubmitted,
}