import React, {useState} from "react";
import './stylesort.css';

export default function Sort(){
    
    const [sorteio, setSorteio] = useState(0)
    
    function random(){
        setSorteio(()=>{
            return Math.floor(100 * Math.random());
        });
    }
    
    
    return(
       <div className="sorteio">
            <p>O número da sorte é:</p>
            <p className="numberSort">{sorteio}</p>
            <button className="btn" onClick={random}>SORTEAR</button>
           
       </div>
    )
}
            
    
 
