import { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from "./firebase.js"


let signUp =()=>{
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    createUserWithEmailAndPassword(auth,email,password)
}