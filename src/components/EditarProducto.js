import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

export const EditarProducto = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Nuevo state de producto
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
  });

  //Producto a editar
  const productoEditar = useSelector((state) => state.productos.productoEditar);

  //Llenar el state automaticamente
  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar]);

  //Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  const handleSubmitEditarProducto = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));
    navigate("/");
  };

  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form onSubmit={handleSubmitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
