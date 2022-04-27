export const dataReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "SET_VIDEOS":
            return {
                ...state,
                videos: payload
            }
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: payload
            }
        case "SET_CATEGORY":
            return {
                ...state,
                category: payload
            }
        case "SET_LIKED_VIDEOS":
            return {
                ...state,
                likedVideos: payload
            }
        default:
            return state;
    }
}