import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../Components/Login/Firebase/firebase.init";



initializeAuthentication();
const useFirebase=()=>{
    const [user, setUser]=useState({})
    const [isLoading, setIsLoding]=useState(true)
    const auth =getAuth()
    const googleProvider= new GoogleAuthProvider()
    const [delivers, setdelivers]=useState([])
    useEffect(()=>{
        fetch('https://gory-nightmare-59210.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setdelivers(data))
    },[])

    const signInGoogle=()=>{
        setIsLoding(true)
      return signInWithPopup(auth, googleProvider)
        
        .finally(()=>setIsLoding(false))
    }

// observe user state change
    useEffect(()=>{
       const unSubcribe= onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoding(false)
        })
        return ()=>unSubcribe;
    },[]);
    const logOut=()=>{
        setIsLoding(true)
        signOut(auth)
        .then(()=>{

        })
        .finally(()=>setIsLoding(false))
    }

    return{
        user,
        isLoading,
        logOut,
        signInGoogle,
        delivers

     
    }
}

export default useFirebase;