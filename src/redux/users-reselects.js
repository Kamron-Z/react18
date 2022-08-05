export const getUsers = (state) => {
  return state.usersPage.users
}

export const getSizeUsersPage = (state) => {
    return state.usersPage.pageSize
}

export const getTotalPage = (state) => {
    return state.usersPage.totalUsersCount
}

export const getPage = (state) => {
    return state.usersPage.currentPage
}

export const getFetching = (state) => {
    return state.usersPage.fetchingInProgress
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}