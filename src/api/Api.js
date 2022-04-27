
import { api } from "./ApiConexao";

const BASA_API = 'http://192.168.100.89/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASA_API}/verificar_is_token?token=${token}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
             
        })
        const dado = await req.json()
        return dado;
    },
    
    checkUser: async (token) => {
        const req = await fetch(`${BASA_API}/user?token=`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        const dado = await req.json()
        return dado;
    },
    signIn: async (telefone, password) => {
        try {
            const req = await fetch(`${BASA_API}/login_jaba`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ telefone, password })
            })

            const dado = await req.json()

            return dado
        } catch (e) {
            return 'erro'
        }
    },
    SignUn: async (nome_completo, telefone, email, tipo_de_conta) => {
        const req = await fetch(`${BASA_API}/registrar_user_jabakule`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome_completo, telefone, email, tipo_de_conta })
        })
        const dado = await req.json()
        return dado;
    },
    jabainfo: async (token) => {
        const req = await fetch(`${BASA_API}/dados_da_carteira?token=${token}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        const dado = await req.json()
        return dado;
    }
}