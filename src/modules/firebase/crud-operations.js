import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const addUser = async (objName, data) => {
    try {
        await addDoc(collection(db, objName), data);
        console.log("Data added!");
    } catch (error) {
        console.error("Error adding data:", error);
    }
};

export const fetchUsers = async (objName, dispatches) => {
    const querySnapshot = await getDocs(collection(db, objName));
    let data = {};
    querySnapshot.forEach((doc) => {
      data[doc.id]=doc.data();
    });
    dispatches(data);
};

export const updateUser = async (objName, id, data) => {
    const userRef = doc(db, objName, id);
    await updateDoc(userRef, data);
    console.log("Data updated!");
};

export const deleteUser = async (objName, id) => {
    await deleteDoc(doc(db, objName, id));
    console.log("Data deleted!");
};

