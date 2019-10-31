import React from 'react'
import Membro from './Membro'

export default props =>
    <React.Fragment>
        <Membro nome="Rafael" sobrenome={props.sobrenome} />
        <Membro nome="Lucas" sobrenome={props.sobrenome} />
        <Membro nome="Daniela" sobrenome={props.sobrenome} />
        <Membro nome="Ana" sobrenome={props.sobrenome} />
    </React.Fragment>
    