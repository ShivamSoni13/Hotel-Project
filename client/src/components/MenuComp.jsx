import React, { useState, useEffect, useContext } from 'react';
import DishCard from './DishCard';
import axios from 'axios';
import { menuRequest } from '../util/requestMethod';
import { Cart } from '../context/OrderContext';

export default function MenuComp() {
  const{filter}=useContext(Cart);
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await menuRequest.get('/');
        setMenuItems(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMenuItems();
  }, []);

  // const addToCart = (menuItem) => {
     
  //    //const updateCart=cartItems.push(menuItem)
  //   //  if(cartItems.length==0){
  //   //         const updateCart=cartItems.push(menuItem)
  //   //         setCartItems(updateCart)
  //   //         console.log("ADDED 0");
  //   //  }
     
  //     //const updateCart=cartItems.push(menuItem)
  //      // setCartItems(updateCart)
  //      setCartItems(prev => [...prev,menuItem]);
     
  //     // console.log(cartItems.length);
  //      //setCartItems([...cartItems, menuItem]);
  //      console.log('Item added to cart:', cartItems.map((a)=>(a)));
  //  // console.log('Cart Items:',cartItems);

  //    //  if(cartItems.length<1){
  // //    setCartItems(cartItems.push(menuItem))
  // //  }else{
  // //   //console.log([...cartItems,menuItem]);
  // //    setCartItems(...cartItems,menuItem);
  // //  }
  // };
  
  if (menuItems.length === 0 && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='h-3/4 border border-black mx-2 p-2 overflow-y-scroll backdrop-brightness-75 backdrop-blur-sm'>
      {menuItems?.filter((data)=>data.name.toLowerCase().includes(filter.toLowerCase())).map((menuItem) => (
        <DishCard key={menuItem.item_id} menuItem={menuItem}  cartItems={cartItems} setCartItems={setCartItems} />
      ))}
    </div>
  );
}
