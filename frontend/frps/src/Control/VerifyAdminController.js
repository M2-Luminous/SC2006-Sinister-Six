import { confirmAdminCreds } from "./DatabaseController";



/**
 * This function verifies the user's login credentials
 * @param {string} email The email of the user
 * @param {string} password The password of the user
 * @returns true if user has been verified, false otherwise
 */
export const verifyAdmin = async (email, password) => {

    return await confirmAdminCreds(email, password).then((doc) => {
        if (doc.exists()) {
            console.log("Document data:", doc.data());
            if (doc.data().password === password) {
                console.log("creds found");
                return true;
            } else {
                console.log("creds not found");
                return false;
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such account!");
            return false;
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        return false;
    });

}