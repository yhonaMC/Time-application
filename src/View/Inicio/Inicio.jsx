import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginGoogle, loginFacebook } from "../../Redux/action/action";
import { loginEmail } from "../../Redux/action/action";
import "./inicio.css";

const Inicio = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      clave: "",
    },
    onSubmit: async (data) => {
      dispatch(loginEmail(data));
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      clave: Yup.string().required(),
    }),
  });

  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleLoginFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <>
      <div className="cont-inicio">
        <Paper elevation={3} className="fondo">
          <form className="form-inicio" onSubmit={formik.handleSubmit}>
            <TextField
              label="Usuario"
              name="email"
              variant="standard"
              className="input-inicio"
              onChange={formik.handleChange}
            />
            <TextField
              label="Password"
              name="clave"
              type="password"
              autoComplete="current-password"
              variant="standard"
              className="input-inicio"
              onChange={formik.handleChange}
            />
            <button type="submit" className="button-inicio">
              Iniciar Sesion
            </button>
            <button className="button-inicio" onClick={handleLoginGoogle}>
              Iniciar con google
            </button>
            <button className="button-inicio" onClick={handleLoginFacebook}>
              Iniciar con facebook
            </button>
            <h5>
              No tienes cuenta?{" "}
              <Link className="register" to="/registro">
                Registrase
              </Link>
            </h5>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default Inicio;
