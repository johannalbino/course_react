import React from 'react'
import { childWithProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>
        {
            childWithProps(props)
        }

        {/*React.Children.map(props.children, child => {
            return React.cloneElement(child, {...props})
        })*/}

        {/*React.cloneElement(
            props.children, { ...props }
        )*/}
        {/*React.cloneElement(
            props.children, {sobrenome: props.sobrenome}
        )*/}
    </div>