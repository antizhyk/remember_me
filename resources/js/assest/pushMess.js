import firebase from "firebase";

const pushMess = () => {

    let firebaseConfig = {
        apiKey: "AIzaSyClOkpXzCoSwxPdVAeOrG1D8SOM3Odcn6E",
        authDomain: "remember-me-9ae59.firebaseapp.com",
        projectId: "remember-me-9ae59",
        storageBucket: "remember-me-9ae59.appspot.com",
        messagingSenderId: "774107080260",
        appId: "1:774107080260:web:425412298620f4f3bb3e11"
    };
// Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

    const messaging = firebase.messaging();
    messaging.requestPermission()
        .then(() => {
            console.log('Have permission')
            return messaging.getToken()
        })
        .then(token => {
            console.log(token)
        })
        .catch(() => console.log('Error Occured'))

    messaging.onMessage(playoad => {
        console.log('On message ', playoad)
    });
}

export default pushMess
