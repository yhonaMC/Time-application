import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc, collection, getDoc } from "firebase/firestore";
import { google, facebook } from "../../Firebase/Firebase";
import { loginTypes } from "../types/type";
import { db } from "../../Firebase/Firebase";

// Registro con Google
export const loginGoogle = () => {
  return async (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginSincrono(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// Registro Con facebook

export const loginFacebook = () => {
  return async (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        console.log(user);
        dispatch(loginSincronoFacebook(user));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const LoginAuth = () => {
  return (dispatch) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      dispatch(loginSincrono(user));
    });
  };
};

export const loginSincrono = (user) => {
  return {
    type: loginTypes.loginGoogle,
    payload: user,
  };
};

export const loginSincronoFacebook = (user) => {
  return {
    type: loginTypes.loginFacebook,
    payload: user,
  };
};

// Registro Con Email y contraseña
export const registerEmail = (data) => {
  return async (dispatch) => {
    const auth = getAuth();
    const newUser = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.clave
    );
    await setDoc(doc(collection(db, "usuarios"), newUser.user.uid), {
      displayName: data.nombre,
      telefono: data.tel,
    })
      .then(() => {
        dispatch(actionRegisterEmail(data, newUser.user.uid));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const actionRegisterEmail = (data, id) => {
  return {
    type: loginTypes.registerEmail,
    payload: {
      displayName: data.nombre,
      telefono: data.tel,
      id: id,
    },
  };
};

// Inicio De Sesion
export const loginEmail = (data) => {
  return async (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.clave)
      .then((userCredential) => {
        getDoc(doc(db, "usuarios", userCredential.user.uid)).then((info) => {
          dispatch(actionLoginEmail(info.data(), userCredential.user.uid));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const actionLoginEmail = (data, id) => {
  return {
    type: loginTypes.loginEmail,
    payload: {
      nombre: data.nombre,
      id: id,
      telefono: data.telefono,
    },
  };
};

//Mantener datos luego de recargar la pagina
export const actionlogin = (id) => {
  return async (dispatch) => {
    await getDoc(doc(db, "usuarios", id)).then((data) =>
      dispatch(reLogin(data.data(), id))
    );
  };
};

export const reLogin = (data, id) => {
  return {
    type: loginTypes.login,
    payload: {
      nombre: data?.nombre,
      id: id,
      telefono: data?.telefono,
    },
  };
};

//Cerrar sesion
export const logOut = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth).then(() => {
      dispatch(logOutRe());
    });
  };
};

export const logOutRe = () => ({
  type: loginTypes.logout,
});
