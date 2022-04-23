import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const localStorageCred = JSON.parse(localStorage.getItem("loginCred"));
    const [token,setToken] = useState(localStorageCred?.token);
    const [currentUser, setCurrentUser] = useState(localStorageCred?.user);

    const loginHandler = async (email, password) => {
        try{
            const response = await axios.post("/api/auth/login",{email, password});
    
            if(response.status === 200){
                localStorage.setItem("loginCred",JSON.stringify({token: response.data.encodedToken, user: response.data.foundUser}));
                setToken(response.data.encodedToken);
                setCurrentUser(response.data.foundUser);
            }
        }
        catch(err){
            alert("Your id does not exist. Please signup!");
            console.error(err.response);
        }
    }

    const signUpHandler = async (email,password,firstName,lastName) => {
        try{
            const response = await axios.post("/api/auth/signup",{
                email,
                password,
                firstName,
                lastName
            })
            if(response.status === 201){
                localStorage.setItem("loginCred",JSON.stringify({token: response.data.encodedToken, user: response.data.createdUser}))
                setToken(response.data.encodedToken);
                setCurrentUser(response.data.currentUser)
            }
        }
        catch(err){
            console.log(err.response);
        }
    }

    const logOutHandler = () =>{
        localStorage.removeItem("loginCred");
        setToken(null);
        setCurrentUser(null);
    }

    return(
        <AuthContext.Provider value={{loginHandler, signUpHandler,logOutHandler, token, currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = ()=> useContext(AuthContext);

export {AuthProvider,useAuth}