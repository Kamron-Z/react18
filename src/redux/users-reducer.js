const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_PAGE = "SET_TOTAL_PAGE"
const IS_FETCHING = "IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false
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
            return  {
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
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId: userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setPageAC = (pageNum) => ({type: SET_PAGE, pageNum: pageNum})
export const setTotalPageAC = (totalPage) => ({type: SET_TOTAL_PAGE, totalPage})
export const isFetchingAC = (isFetching) => ({type: IS_FETCHING, isFetching})

export default usersReducer