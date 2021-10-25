import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { userTypes } from "../types/type";

export const putUser = (item, id, history) => {
  return async (dispatch) => {
    const docRef = doc(db, "usuarios", id);
    await updateDoc(docRef, item).then(() => {
      getDoc(doc(db, "usuarios", id)).then((data) => {
        dispatch(actionPutUser(data.data(), id));
        history.push("/perfil");
      });
    });
  };
};

export const actionPutUser = (itemMod, id) => {
  return {
    type: userTypes.putUserL,
    payload: {
      id: id,
      displayName: itemMod.nombre,
      telefono: itemMod.telefono,
    },
  };
};
