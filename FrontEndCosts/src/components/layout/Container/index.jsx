import React  from 'react'
import './style.css'

export default function Container(props) {
    return (
        <div className={`container ${props.customClass}`}>
            {props.children}
        </div>
    )
}