
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../server/api";


interface Tranferencia {
    id: number,
    nome: string,
    sms: number,
    jaba: string,
    afilhados: string,
    token:string
}
type TrasantionInput = Omit<Tranferencia, 'id' | 'afilhados'>

interface TransationOperacao {
    transferencias: Tranferencia[],
    creatTransation: (transation: TrasantionInput) => Promise<void>;
}
interface TransationProderProps {
    children: ReactNode
}

export const TransationContext = createContext<TransationOperacao>(
    {} as TransationOperacao
);

export async  function  TransationProvider({ children }: TransationProderProps) {
    const [transferencias, setTransferencias] = useState<Tranferencia[]>([]);
    const [transferencias1, setTransferencias1] = useState([]);
  const token = await AsyncStorage.getItem('tokenValidation')
            console.log(token) 
           
    
            const req = await fetch(`http://172.18.192.1/api/user?token=${token}`,{
                method:'GET',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify()??''
            })
            const dado = await req.json()

           
       
    
    console.log('comtexts')
    console.log(dado)
    

    async function creatTransation(transationinput: TrasantionInput) {
        const response = await api.post('/tranferencias', {
            ...transationinput
        })
        setTransferencias([...transferencias, response.data.transferencias])
    }

    return (
        <TransationContext.Provider value={{ transferencias, creatTransation }}>
            {children}
        </TransationContext.Provider>
    )


}

export function useTranation(){
    const context=useContext(TransationContext);
    return context;
}