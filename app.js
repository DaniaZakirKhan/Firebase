import{auth , createUserWithEmailAndPassword ,  ,signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut} from "./firebase.js";

let signup = () =>{

    let email=document.getElementById("email")
    let password=document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value , password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user")
  })
  .catch((error) => {
    console.log(error.message);
    
  });

}

let signupBtn=document.getElementById("signupBtn");

signupBtn.addEventListener("click" , signup);

let sign_up = document.getElementById("sign_up")
sign_up.addEventListener("click",signUp)
let signIn=()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    console.log(error.code); 
  });
}