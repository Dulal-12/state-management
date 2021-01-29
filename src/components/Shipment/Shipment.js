import React, { useContext } from 'react';
import { cartContext } from '../../App';

const Shipment = () => {
    const [cart , setCart ]  = useContext(cartContext);
    return (
        <div>
             <h3>This is shipment : {cart}</h3>
             <button onClick = {()=> setCart(cart+1)}> Add</button>

        </div>
    );
};

export default Shipment;