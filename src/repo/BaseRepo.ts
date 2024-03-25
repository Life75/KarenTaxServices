import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth"

export default class BaseRepo {
    protected db: Firestore 
    protected auth: Auth
    constructor() {
        // Import the functions you need from the SDKs you need
        //import { getAnalytics } from "firebase/analytics";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyC1RyvegUM39yshd_Va3-yYIzrkZSdce9Q",
            authDomain: "karen-tax-services.firebaseapp.com",
            projectId: "karen-tax-services",
            storageBucket: "karen-tax-services.appspot.com",
            messagingSenderId: "485652806507",
            appId: "1:485652806507:web:ffb328251172e997c0ea2e",
            measurementId: "G-4RW0QVBZ19"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app)
        this.auth = getAuth(app)
    }
}