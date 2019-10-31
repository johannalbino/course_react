import React, { Component } from 'react'

export default class ComponenteClasse extends Component{
    render(){
        return (
            <h1>Olá Classe {this.props.valor || 'Padrão'}</h1>
        )
    }
}