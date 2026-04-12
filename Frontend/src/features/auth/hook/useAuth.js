import {setError,setLoading,setUser} from '../state/auth.slice'
import {login, register} from '../service/auth.api'
import {useDispatch} from 'react-redux'


export function useAuth(){

    const dispatch = useDispatch();

    async function handleRegister({email, password,fullname,contact,isSeller=false}){
        const data = await register({email, password,fullname,contact,isSeller})
        dispatch(setUser(data.user))
    } 

    async function handleLogin({email,password}) {
        const data = await login({email,password})
        dispatch(setUser(data.user) )
    }
        
    
    return {handleRegister,handleLogin}
}