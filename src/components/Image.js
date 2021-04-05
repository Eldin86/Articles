import React from 'react'

const Image = ({src, name, width, onClick}) => {
    return (
        <>
            <img onClick={onClick} src={src} alt={name} width={width || '100%'}/>
        </>
    )
}

export default Image
