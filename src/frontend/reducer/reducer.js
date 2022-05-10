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
        case "SET_HISTORY":
            return{
                ...state,
               history: payload
            }
        case "SET_WATCH_LATER":
            return {
                ...state,
                watchlater: payload
            }
        case "ADD_PLAYLIST":
            return {
                ...state,
                playlists: payload
            }
        case "ADD_VIDEO_TO_PLAYLIST":
           
            // use reducer to create new playlist so that state will change
            const newPlaylist = state.playlists.reduce((acc,curr)=>{
                return payload._id === curr._id ? [...acc, payload] : [...acc,curr]
            },[])

        return {
            ...state,
            playlists: newPlaylist
        };
        default:
            return state;
    }
}