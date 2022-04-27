import { createContext, useContext, useEffect, useReducer } from "react";
import { getCategories, getVideos } from "../services/dataService";
import { dataReducer } from "../reducer/reducer";
import { useAuth } from "./auth-context";
import axios from "axios";

const DataContext = createContext();

const initialState = {
  videos: [],
  categories:[],
  category: "All",    // for filtering
  likedVideos: []
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const {token} = useAuth()

  useEffect(()=> {
    async function fetchData () {
        const videoResponse = await getVideos();
        dispatch({ type: "SET_VIDEOS", payload: videoResponse.videos });
        
        const categoryResponse = await getCategories();
        dispatch({type: "SET_CATEGORIES", payload: categoryResponse.categories});
    }
    fetchData();
  },[])

  async function addToLikedVideos(video){
    try{
      const likedResponse = await axios.post("/api/user/likes",
        {
          video
        },
        {
          headers: {
            authorization: token
          }
        }
      )
      console.log(likedResponse);
      if(likedResponse.status === 201){
        dispatch({type: "SET_LIKED_VIDEOS", payload: likedResponse.data.likes})
      }
    }
    catch(error){
      console.error(error.response);
    }
  }

  async function deleteFromLikedVideos(video){
    try{
      const response = await axios.delete(`/api/user/likes/${video._id}`,
      {
        headers:{
          authorization: token
        }
      });

      console.log(response);
      if(response.status === 200){
        dispatch({type: "SET_LIKED_VIDEOS", payload: response.data.likes})
      }
    }
    catch(error){
      console.error(error.response)
    }
  }

  return (
    <DataContext.Provider value={{ state, dispatch,addToLikedVideos, deleteFromLikedVideos }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
