importScripts('https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyClOkpXzCoSwxPdVAeOrG1D8SOM3Odcn6E",
    authDomain: "remember-me-9ae59.firebaseapp.com",
    projectId: "remember-me-9ae59",
    storageBucket: "remember-me-9ae59.appspot.com",
    messagingSenderId: "774107080260",
    appId: "1:774107080260:web:425412298620f4f3bb3e11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

