import {
  SET_VIDEOS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_VIDEO,
} from '../types'

const initialState = {
  videos: [],
  video: {},
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      }

    case SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false,
      }
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        scream => scream.screamId === action.payload.screamId
      )
      state.screams[index] = action.payload
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload
      }
      return {
        ...state,
      }
    case DELETE_VIDEO:
      index = state.videos.findIndex(video => video.videoId === action.payload)
      state.videos.splice(index, 1)
      return {
        ...state,
      }
    // case SUBMIT_COMMENT:
    //   return {
    //     ...state,
    //     scream: {
    //       ...state.scream,
    //       comments: [action.payload, ...state.scream.comments],
    //     },
    //   }
    default:
      return state
  }
}
