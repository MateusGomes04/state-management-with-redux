import "./Intervalo.css"
import React from "react"
import Card from "./Card"
import { connect } from "react-redux"

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

export default connect(mapStateToProp)(Intervalo)