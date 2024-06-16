import React from "react"

const Card = (props, {style}) => {

    return(
        <div
            style={{
                boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                borderRadius: '1em',
                padding: '0.8em',
                // width: 'fit-content',
                style,
            }}
        >
            {props.children}
        </div>
    )
}

export default Card