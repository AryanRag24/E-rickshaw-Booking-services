// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUZfLhlAxPywcg08ULH4mXXtQWmVZONUs",
  authDomain: "authform-bfd4b.firebaseapp.com",
  projectId: "authform-bfd4b",
  storageBucket: "authform-bfd4b.appspot.com",
  messagingSenderId: "681027438002",
  appId: "1:681027438002:web:5c08e5a0ae82c48f1510ab"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            
            // document.write("You are Signed Up")
            alert("Sign Up Successful !")
            console.log(result)
            window.open("home.html","_self");
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            alert("Sign Up Failed");
            console.log(error.message);
            // ..
        });
}

// Sign In function
const signIn = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            
            // document.write("You are Signed In");
            alert("Sign In Successful !")
            console.log(result);
            window.open("home.html","_self");
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            alert("Sign In Failed");
        });
}