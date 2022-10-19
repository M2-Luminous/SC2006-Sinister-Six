import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc, updateDoc, limit, query, orderBy, startAfter, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAO1UltJ3w_L0PihYZh5yOAqc3tZzKMjlY",
    authDomain: "sinistersix-a7294.firebaseapp.com",
    projectId: "sinistersix-a7294",
    storageBucket: "sinistersix-a7294.appspot.com",
    messagingSenderId: "1001256148525",
    appId: "1:1001256148525:web:dc4e6af2b971c3d8b4a2a4",
    measurementId: "G-SLWEFXJ12L"
};

// backup firestore incase we hit the limit
// const firebaseConfig = {
//     apiKey: "AIzaSyD2X-yBfawUzAuEv0Dk8mw3N4tpGoAJFv0",
//     authDomain: "escendotwo.firebaseapp.com",
//     databaseURL: "https://escendotwo-default-rtdb.firebaseio.com",
//     projectId: "escendotwo",
//     storageBucket: "escendotwo.appspot.com",
//     messagingSenderId: "373625997495",
//     appId: "1:373625997495:web:ddb6a6aecde59cb7266532",
//     measurementId: "G-54Y5ZYX5V7"
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const getFlats = async (sortBy, viewNo) => {
    let ref = collection(db, "data");
    let q = query(ref, orderBy("resale_price"), limit(viewNo));
    let orderKey;
    let orderDirection;

    switch (sortBy) {
        case 1:
            orderKey = "resale_price";
            orderDirection = "asc";
            break;
        case 2:
            orderKey = "resale_price";
            orderDirection = "desc";
            break;
        case 3:
            orderKey = "lease_commence_date";
            orderDirection = "desc";
            break;
        case 4:
            orderKey = "lease_commence_date";
            orderDirection = "asc";
            break;
        default:
            orderKey = "resale_price";
            orderDirection = "asc";
            break;

    }
    q = query(ref, orderBy(orderKey, orderDirection), limit(viewNo));
    return await getDocs(q);
}


export const getMoreFlats = async (sortBy, viewNo, lastDoc) => {
    let ref = collection(db, "data");
    let q = query(ref, orderBy("resale_price"), limit(viewNo));
    let orderKey;
    let orderDirection;

    switch (sortBy) {
        case 1:
            orderKey = "resale_price";
            orderDirection = "asc";
            break;
        case 2:
            orderKey = "resale_price";
            orderDirection = "desc";
            break;
        case 3:
            orderKey = "lease_commence_date";
            orderDirection = "desc";
            break;
        case 4:
            orderKey = "lease_commence_date";
            orderDirection = "asc";
            break;
        default:
            orderKey = "resale_price";
            orderDirection = "asc";
            break;

    }
    q = query(ref, orderBy(orderKey, orderDirection), startAfter(lastDoc || 0), limit(viewNo));
    return await getDocs(q);
}

export const getOneFlat = async (flatID) => {
    let ref = doc(db, "data", flatID);
    return await getDoc(ref);
}

export const writeFeedback = async (docData) => {
    return await addDoc(collection(db, "feedback"), docData);
}

export const confirmAdminCreds = async (email) => {
    let ref = doc(db, "creds", email);
    return await getDoc(ref);
}

export const getFeedbacks = async () => {
    let ref = collection(db, "feedback");
    let q = query(ref, orderBy("createdAt", "desc"));
    return await getDocs(q);
}

export const delFeedback = async (id) => {
    let ref = doc(db, "feedback", id);
    console.log("deleting feedback: " + id);
    return await deleteDoc(ref);
}