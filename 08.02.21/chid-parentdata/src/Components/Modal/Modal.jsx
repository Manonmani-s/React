import React from 'react'

export default function Modal({closeModal,img}) {
    return (
        <div>
            <button
            className="close"    
            onClick ={closeModal}
            >X</button>
            <img
             src={img.largeImageURL}
             alt={img.id}
            />
            <span className="tags">{img.tags}</span>
        </div>
    )
}
