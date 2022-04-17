export const reducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "SET_VIDEOS":
            return {
                ...state,
                videos: payload
            }
    }
}