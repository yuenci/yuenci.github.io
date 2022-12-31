import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAfr-AXKIqrQovmlEvH31V1LeOuT4c7QNc",
    authDomain: "nftarts-32191.firebaseapp.com",
    projectId: "nftarts-32191",
    storageBucket: "nftarts-32191.appspot.com",
    messagingSenderId: "865252345043",
    appId: "1:865252345043:web:227e3ff1b632df85328026",
    measurementId: "G-BPLH0BTZ4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function writeToDB(data) {
    let currentAdmin = localStorage.getItem("admin")
    if (!currentAdmin) currentAdmin = "Innis"

    try {
        const docRef = await addDoc(collection(db, "images"), {
            ...data,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export async function readFromDB() {
    const querySnapshot = await getDocs(collection(db, "images"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export async function deleteFromDB(id) {
    await deleteDoc(doc(db, "images", id));
}

export async function updateDB(id, data) {
    await updateDoc(doc(db, "images", id), data);
}
