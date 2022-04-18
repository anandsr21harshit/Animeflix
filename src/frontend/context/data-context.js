import { createContext, useContext, useEffect, useReducer } from "react";
import { getCategories, getVideos } from "../services/dataService";
import { reducer } from "../reducer/reducer";

const DataContext = createContext();

const initialState = {
  videos: [],
  categories:[],
  category: "All"    // for filtering
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    async function fetchData () {
        const videoResponse = await getVideos();
        dispatch({ type: "SET_VIDEOS", payload: videoResponse.videos });
        
        const categoryResponse = await getCategories();
        dispatch({type: "SET_CATEGORIES", payload: categoryResponse.categories});
    }
    fetchData();
  },[])

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
