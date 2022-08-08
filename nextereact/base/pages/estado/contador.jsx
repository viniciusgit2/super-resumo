import { useState } from "react"
export default  function contador(){
  const {numero}=useState(0);
  function aum(){
 numero+1
  }
  function dim(){
 numero-1
  }
    return (
        
            
            
            <div>{contador}
                <h1>
                {numero}
                </h1>
            <button on onClick={dim}>+</button>
            
            <button on onClick={aum}>-</button>
        </div>
    )
        }
            
        
    

