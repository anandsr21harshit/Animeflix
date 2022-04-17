import axios from "axios"

async function getVideos(){
    try{
        const response = await axios.get("/api/videos");

        if(response.status === 200) return response.data
    }
    catch(error){
        console.error(error.response)
    }
}

export {getVideos}