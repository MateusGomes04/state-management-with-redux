import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

import { alterarNumeroMinimo } from "../store/actions/numeros"

function Intervalo(props) {
    const { min, max } = props

 
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} readOnly></input>

                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly></input>
                </span>
            </div>

        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionCreatorsToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // Action Creator -> Action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProp, mapActionCreatorsToProp) (Intervalo)
