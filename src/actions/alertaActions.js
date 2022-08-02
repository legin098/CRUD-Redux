import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";


//Muestra una alerta
export function mostrarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch( crearAlerta(alerta) )
  }
}

const crearAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})

//ocultar alerta 
export function ocultarAlertaAcction() {
  return (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA
})