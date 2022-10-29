import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, limit, query, orderBy, startAfter, deleteDoc, where } from "firebase/firestore";

/*const firebaseConfig = {
    apiKey: "AIzaSyAO1UltJ3w_L0PihYZh5yOAqc3tZzKMjlY",
    authDomain: "sinistersix-a7294.firebaseapp.com",
    projectId: "sinistersix-a7294",
    storageBucket: "sinistersix-a7294.appspot.com",
    messagingSenderId: "1001256148525",
    appId: "1:1001256148525:web:dc4e6af2b971c3d8b4a2a4",
    measurementId: "G-SLWEFXJ12L"
};*/

// backup firestore incase we hit the limit
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

/**
 * This function gets flats from the database, with parameters to sort and limit the number of flats.
 * @param {string} sortBy The field to sort by - either 'price' or 'lease commence'
 * @param {number} viewNo The view number to start from - used for pagination
 * @returns an object containing viewNo of flats, sorted by the given parameters
 */
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

/**
 * This function is for pagination, it gets the next set of flats from the database
 * @param {string} sortBy The field to sort by - either 'price' or 'lease commence'
 * @param {number} viewNo The view number to start from - used for pagination 
 * @param {object} lastDoc The last document in the previous set of flats
 * @returns an object containing viewNo of flats, sorted by the given parameters
 */
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

/**
 * This function gets one flat from the database
 * @param {*} flatID The ID of the flat to get
 * @returns an object containing the flat
 */
export const getOneFlat = async (flatID) => {
    let ref = doc(db, "data", flatID);
    return await getDoc(ref);
}

// Filter handlers

/**
 * This function gets flats from the database based on the given filters
 * @param {string} townName The name of the town to filter by
 * @param {string} noOfRooms The number of rooms to filter by
 * @param {string} sortBy The field to sort by - either 'price' or 'lease commence'
 * @returns an object containing the flats where all the filters are satisfied
 */
export const getFilteredFlats = async (townName, noOfRooms, flatModel, leaseStartDate, sortBy) => {
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

    const q = query(
        collection(db, "data"),
        orderBy(orderKey, orderDirection),
        where("town", "==", townName),
        where("flat_type", "==", noOfRooms),
        // where("flat_model", "==", flatModel),
        // where("lease_commence_date", "==", leaseStartDate),
        limit(50)
    );

    return await getDocs(q);
}

// Graph handlers

/**
 * This function gets the average resale price of flats in the given town
 * @param {string} townName The name of the town to get the average resale price of
 * @param {string} streetName The name of the street to get the average resale price of
 * @param {number} leaseCommence Date The lease commence date to get the average resale price of
 * @param {string} flatType The flat type to get the average resale price of
 * @param {string} flatModel The flat model to get the average resale price of
 * @param {number} floorArea The floor area to get the average resale price of
 * @returns an object containing the average resale price of flats in the given town
 */
export const getGraphFlat = async (townName, leaseCommence, flatType, flatModel, floorArea) => {
    let ref = collection(db, "data");
    let q = query(
        ref,
        where("town", "==" ,townName),
        where("lease_commence_date", "==" ,leaseCommence),
        where("flat_type", "==" ,flatType),
        limit(1));
    return await getDocs(q);
}

// let leaseS = [];
// let price = [];

// export const getGraphFlat2 = async (townName, leaseCommence, flatType, flatModel, floorArea) => {
//     let ref = collection(db, "data");
//     let q = query(
//         ref,
//         where("town", "==" ,townName),
//         where("lease_commence_date", "==" ,leaseCommence),
//         where("flat_type", "==" ,flatType),
//         limit(1));
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//             leaseS.push(doc.data().lease_commence_date);
//             price.push(doc.data().resale_price);
//         });
//         return [leaseS, price];
// }


// Feedback handlers
/**
 * This function adds a feedback to the database
 * @param {object} docData The data of the feedback to add
 * @returns a promise containing the result of the add operation
 */
export const writeFeedback = async (docData) => {
    return await addDoc(collection(db, "feedback"), docData);
}


/**
 * This function verifies the user's login credentials
 * @param {string} email The email of the user
 * @returns a promise containing the result of the login operation
 */
export const confirmAdminCreds = async (email) => {
    let ref = doc(db, "creds", email);
    return await getDoc(ref);
}

/**
 * This function gets all the feedback from the database
 * @returns an object containing all the feedback
 */
export const getFeedbacks = async () => {
    let ref = collection(db, "feedback");
    let q = query(ref, orderBy("createdAt", "desc"));
    return await getDocs(q);
}

/**
 * This function deletes a feedback from the database
 * @param {string} id The ID of the feedback to delete
 * @returns a promise containing the result of the delete operation
 */
export const delFeedback = async (id) => {
    let ref = doc(db, "feedback", id);
    console.log("deleting feedback: " + id);
    return await deleteDoc(ref);
}
