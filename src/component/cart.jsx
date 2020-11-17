import { blue, yellow } from '@material-ui/core/colors';
import React, { useState } from 'react';


function Cart(props){
    let [value,setValue]=useState(0);
    
    function increase(){
        setValue(value+1);
        
    }
    function decrease(){   
        setValue(value===0?0:value-1);
        
    }
    
    return <div className="cartStyle">
        <p align="center" value={value} style={{backgroundColor:value>0?"blue":"yellow",color:value>0?"white":"black"}}>
        {value===0?"Zero":value}
        </p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button className="deleteButton">Delete</button>
    </div>;
}


export default Cart;