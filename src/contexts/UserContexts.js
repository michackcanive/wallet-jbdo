import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{createContext,useContext,useEffect,useReducer} from "react";
import Api from "../api/Api";
import { initialState,UserReducer } from "../reducers/userReducers";


export const UserContextProps=createContext();

export default ({children})=>{

    
 const dadosUser={
     name:'MK'
 }

 const das = async()=>{
  const token = await AsyncStorage.getItem('tokenValidation')
  console.log(token) 

  const req = await fetch(`http://172.18.192.1/api/user?token=${token}`,{
      method:'GET',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify()
  })
  const dado = await req.json()
  setTransferencias1(dado)

console.log('comtexts')
console.log(dado)
 } 

 

    return(
        <UserContextProps.Provider value={dadosUser}>
            {children}
        </UserContextProps.Provider>
    )
}

export const useUserContexs = ()=> useContext(UserContextProps)