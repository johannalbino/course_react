import React, { Component } from 'react'

export default class Contador extends Component{
    
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
    }

    menosUm =() => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alteraNumero = diferenca => {
        this.setState({ numero: this.state.numero + diferenca })
    }

    render(){
        return(
            <div>
                <div>
                    Número: {this.state.numero}
                </div>
                <button onClick={() => this.alteraNumero(1)}>Inc</button>
                <button onClick={() => this.alteraNumero(-1)}>Dec</button>
                <button onClick={() => this.alteraNumero(10)}>Inc10</button>
                <button onClick={() => this.alteraNumero(-10)}>Dec10</button>
            </div>
        )
    }
}