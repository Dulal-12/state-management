import React, { useContext } from 'react';
import { cartContext } from '../../App';

const Home = () => {
    
    const [cart , setCart ]  = useContext(cartContext);
    return (
        <div>
              <h3>This is Home : {cart} </h3>
              <button onClick = {()=> setCart(cart+1)}> Add</button>
        </div>
    );
};

export default Home;