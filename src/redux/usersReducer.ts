import {ResponseUserType, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

export type UsersReducersActionType =
  | FollowType
  | UnFollowType
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setIsFollowing>

type FollowType = ReturnType<typeof followSuccess>
type UnFollowType = ReturnType<typeof unfollowSuccess>

const FOLLOW = "USER/FOLLOW";
const UNFOLLOW = "USER/UNFOLLOW";
const SET_USERS = "USER/SET_USERS";
const SET_CURRENT_PAGE = "USER/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = 'USER/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'USER/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'USER/TOGGLE_IS_FOLLOWING';

export type UsersData = {
  id: number,
  name: string
  followed: boolean
  photos: {
    small: string,
    large: string
  }
}

export type UserPropsType = {
  users: Array<UsersData>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<any>
}

const initialState: UserPropsType = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

export const usersReducer = (state: UserPropsType = initialState, action: UsersReducersActionType): UserPropsType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users, ...state.users]
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
};

export const followSuccess = (userID: number) => {
  return {
    type: FOLLOW,
    userID: userID
  } as const
}

export const unfollowSuccess = (userID: number) => {
  return {
    type: UNFOLLOW,
    userID: userID
  } as const
}

export const setUsers = (users: Array<UsersData>) => {
  return {
    type: SET_USERS,
    users: users
  } as const
}

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  } as const
}

export const setTotalCount = (totalUsersCount: number) => {
  return {
    type: SET_TOTAL_COUNT,
    count: totalUsersCount
  } as const
}

export const setIsFetching = (isFetching: boolean) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  } as const
}

export const setIsFollowing = (followingInProgress: boolean, userId: number) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    followingInProgress,
    userId
  } as const
}


export const requestUser = (page: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(true));

    let response = await usersAPI.getUsersData(page, pageSize)

    dispatch(setIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount));
  }
}

const followUnfollowFlow = async (dispatch: Dispatch,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<ResponseUserType>,
                                  actionCreator: (userId: number) => FollowType | UnFollowType) => {
  dispatch(setIsFollowing(true, userId))

  let response = await apiMethod(userId)

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }

  dispatch(setIsFollowing(false, userId))
}

export const unfollow = (userId: number) => {
  return async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUsers.bind(usersAPI), unfollowSuccess)
  }
}

export const follow = (userId: number) => {
  return async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followSuccess)
  }
}

