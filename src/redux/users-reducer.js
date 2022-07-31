const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_PAGE = "SET_TOTAL_PAGE"
const IS_FETCHING = "IS_FETCHING"
const FETCHING_IN_PROGRESS = "FETCHING_IN_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    fetchingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.pageNum
            }
        case SET_TOTAL_PAGE:
            return {
                ...state, totalUsersCount: action.totalPage
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FETCHING_IN_PROGRESS:
            return {
                ...state,
                fetchingInProgress: action.isFetching ?
                    [...state.fetchingInProgress, action.userId]
                    : [...state.fetchingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId})
export const unFollow = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setPage = (pageNum) => ({type: SET_PAGE, pageNum: pageNum})
export const setTotalPage = (totalPage) => ({type: SET_TOTAL_PAGE, totalPage})
export const setIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const setFetchingInProgress = (isFetching, userId) => ({type: FETCHING_IN_PROGRESS, isFetching, userId})

export default usersReducer