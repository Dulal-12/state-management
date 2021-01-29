import React, { useContext, useState } from 'react';
import { cartContext } from '../../App';

const Header = () => {

    const [cart , setCart] = useContext(cartContext)

    
    
    return (
      
        <div>
            <h3>This is Header :  {cart}</h3>
            <button onClick={()=> setCart(cart+1)}  >Add Number</button>
          
        </div>
    );
};

export default Header;