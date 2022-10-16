import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, updateDoc, limit, query, where } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyAO1UltJ3w_L0PihYZh5yOAqc3tZzKMjlY",
//     authDomain: "sinistersix-a7294.firebaseapp.com",
//     projectId: "sinistersix-a7294",
//     storageBucket: "sinistersix-a7294.appspot.com",
//     messagingSenderId: "1001256148525",
//     appId: "1:1001256148525:web:dc4e6af2b971c3d8b4a2a4",
//     measurementId: "G-SLWEFXJ12L"
// };

const firebaseConfig = {
    apiKey: "AIzaSyD2X-yBfawUzAuEv0Dk8mw3N4tpGoAJFv0",
    authDomain: "escendotwo.firebaseapp.com",
    databaseURL: "https://escendotwo-default-rtdb.firebaseio.com",
    projectId: "escendotwo",
    storageBucket: "escendotwo.appspot.com",
    messagingSenderId: "373625997495",
    appId: "1:373625997495:web:ddb6a6aecde59cb7266532",
    measurementId: "G-54Y5ZYX5V7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getFlats = async () => {
    let ref = collection(db, "flats");
    let q = query(ref, limit(5));
    return await getDocs(q);
}

export const getOneFlat = async (flatID) => {
    // let ref = doc(db, "flats", flatID);
    // return await getDoc(ref);
    let ref = doc(db, "flats", flatID);
    return await getDoc(ref);
}
// export const getFlats = async () => {
//     let ref = collection(db, "flats");
//     return getDocs(ref);
// }

// export const getFeedbacks = async () => {
//     let ref = collection(db, "feedback");
//     return getDocs(ref);
// }