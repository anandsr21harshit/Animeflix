import { createContext, useContext, useEffect, useReducer } from "react";
import { getVideos } from "../services/dataService";
import { reducer } from "../reducer/reducer";

const DataContext = createContext();

const initialState = {
  videos: [],
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=> {
    async function fetchData () {
        const videoResponse = await getVideos();
        dispatch({ type: "SET_VIDEOS", payload: videoResponse.videos });
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
