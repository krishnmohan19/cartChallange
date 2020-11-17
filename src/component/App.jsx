import React, { useState } from "react";
import Cart from "./cart";
import Header from "./Header";

function App(){

    const [cartArray,setarray]=useState([0,1,2,3]);
    var [totalProduct,setTotalProduct]=useState(0);
    function totalIteam(numOfIteam){
        setTotalProduct(prevValue => {
            console.log(prevValue);
            return(prevValue+numOfIteam);
        });
    }
    return <div>
        <Header totalProduct={totalProduct}/>  
        {cartArray.map((iteam,index)=>{
        
            return <Cart 
            key={index}
            id={index}
            setTotalProduct={setTotalProduct}>
            totalProduct={totalProduct}
            </Cart>;
        })}
        
    </div>;
}

export default App;