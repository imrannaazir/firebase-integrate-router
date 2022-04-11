import { useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { useNavigate } from "react-router-dom";



const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const handleGoogleSign = () => {

        console.log('clicked');
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user);
                navigate('/home')
            })
            .catch(error => console.log(error))
    }
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setUser({})
        });

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return { user, handleGoogleSign, handleLogOut }
}
export default useFirebase