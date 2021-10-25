import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { registerEmail } from "../../Redux/action/action";
const Registro = () => {
  const dispatch = useDispatch();

  //Capturamos el formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      tel: "",
      email: "",
      clave: "",
    },
    onSubmit: async (data) => {
      dispatch(registerEmail(data));
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      tel: Yup.string().required(),
      email: Yup.string().email().required(),
      clave: Yup.string().required(),
    }),
  });

  return (
    <div className="cont-inicio">
      <Paper elevation={3} className="fondo">
        <form className="form-inicio" onSubmit={formik.handleSubmit}>
          <TextField
            type="text"
            name="nombre"
            label="Nombre"
            variant="standard"
            className="input-inicio"
            onChange={formik.handleChange}
          />
          <TextField
            type="tel"
            name="tel"
            label="Telefono"
            variant="standard"
            className="input-inicio"
            onChange={formik.handleChange}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
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
          <button type="submit" className="button-register">
            Registrar
          </button>
          <Link className="register-new" to="/">
            Iniciar sesión
          </Link>
        </form>
      </Paper>
    </div>
  );
};

export default Registro;
