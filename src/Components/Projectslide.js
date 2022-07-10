import React from 'react'

export default function Projectslide(props) {
    return(
        <a href={props.url} target='_blank' rel="noreferrer">
        <div className='h-full w-full bg-gray-200 border border-black flex flex-col items-center z-10'> 
        
        <h1 className='text-center py-4'>{props.name}</h1>
    
        <img className='w-auto h-3/4 border-2 border-black' src={props.imgsrc} alt='img'></img>
    
        <h1 className='p-4'>{props.description}</h1>
    
        </div>
        </a>
        )
}
