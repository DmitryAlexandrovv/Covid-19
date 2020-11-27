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
    return {
        type: 'MENU_SUBMITTED',
        payload: country,
    }
}

const newsRequested = () => {
    return {
        type: 'NEWS_REQUESTED',
    }
}

const newsLoaded = (news) => {
    return {
        type: 'NEWS_LOADED',
        payload: news,
    }
}

const pageChanged = (newPage) => {
    return {
        type: 'PAGE_CHANGED',
        payload: newPage,
    }
}

export {
    menuLoaded,
    menuRequested,
    menuOnError,
    menuSubmitted,
    newsRequested,
    newsLoaded,
    pageChanged,
}