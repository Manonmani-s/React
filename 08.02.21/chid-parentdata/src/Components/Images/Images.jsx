import React from 'react'

export default function Images({images,openModal}) {
    return (
        <div className="imgList">
            {images.map(img=>{
                return(
                    <div className="imgItem" key={img.id}>
                        <span>{img.tags}</span>
                        <img 
                        src={img.previewURL}
                        alt={img.id}
                        onClick={()=>openModal(img)}
                        />
                    </div>
                )
            })}
        </div>
    )
}
