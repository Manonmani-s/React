import React from 'react'
  
    const Button = ({v1,v2,operation,getResult,seq})=> {

        const calculate = ()=>{
         
           
            switch(operation){
                        case 'Plus':
                            getResult(parseInt(v1)+parseInt(v2))
                            break;
                        case 'Minus':
                            getResult(v1-v2)
                            break;
                        case 'Divide':
                          
                            getResult(v1/v2)
                            break;
                        case 'Multiply':
                            getResult(v1*v2)
                            break;
                        default:
                            break;
                        
                    }
    
        }

    return (
                <button className={`btn${seq}`} onClick={calculate}>
                    {operation}
                </button>
        
    )
}

export default Button
