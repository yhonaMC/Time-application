import React, { useState } from "react";
import "./perfil.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { putUser } from "../../Redux/action/crudAction";

const Perfil = () => {
  const [edit, setEdit] = useState(false);
  const usuario = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      nombre: usuario?.displayName,
      tel: usuario.telefono === null ? "" : usuario.telefono,
    },
    onSubmit: (data) => {
      dispatch(
        putUser(
          {
            nombre: data.displayName,
            telefono: data.tel,
          },
          usuario?.id,
          history
        )
      );
      formik.resetForm();
    },
  });

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (!edit) {
    return (
      <div className="cont-perfil">
        <h1>Datos Usuario</h1>
        <span>Nombre: {usuario.displayName}</span>
        <span>Telefono:{usuario.telefono}</span>
        <button className="btn-editar" onClick={handleEdit}>
          Editar
        </button>
      </div>
    );
  } else {
    return (
      <>
        <form onSubmit={formik.handleSubmit}>
          <div className="cont-perfil">
            <h1>Datos Usuario</h1>
            <input
              type="text"
              className="input-perfil-nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              name="nombre"
              maxLength="25"
            />
            <input
              type="tel"
              name="tel"
              maxLength="10"
              value={formik.values.tel}
              onChange={formik.handleChange}
            />
            <button className="btn-editar" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </>
    );
  }
};

export default Perfil;
