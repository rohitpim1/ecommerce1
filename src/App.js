import React, { useState , useEffect} from 'react';
//import Products from './component/products/Products';
//import Navbar from './component/Navbar/Navbar';
import { commerce } from './lib/commerce';
import { Products , Navbar , Cart, Checkout } from './component';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
function App() {
  
  //for product fetching from commerce.js
  const [products, setProducts] = useState([]);
  const [ cart,setCart]= useState({});
  
  //function for fetching product
  const fetchProducts = async ()=>{
    const { data } = await commerce.products.list();
    setProducts(data);
  }
    //function for fetching cart
    const fetchCart = async ()=>{
       setCart(await commerce.cart.retrieve());
    }
  
    //function to add item in cart
    const handleAddCart = async (productId,quantity) =>{
      const { cart } = await commerce.cart.add(productId,quantity);
      setCart(cart);
    }

    //function for updating a cart
     const handleUpdateCartQty = async (productId , quantity) =>{
       const { cart } = await commerce.cart.update(productId,{ quantity});
       setCart(cart);
     }

     //function for removing item from cart.
     const handleRemoveFromCart = async (productId) =>{
       const{ cart } = await commerce.cart.remove(productId);;
       setCart(cart);
     }

     //function for emptying the cart.
     const handleEmptyCart = async () =>{
       const { cart} = await commerce.cart.empty();
       setCart(cart);
     }

  // as soon as window load product , cart will get displayed from commerce.js
  useEffect(
    ()=>{
      fetchProducts();
      fetchCart();
    }, []
  );
  console.log(cart);
  return(
  <Router>
    <div>
    <Navbar totalItems={cart.total_items} />
    <Switch>
    <Route exact path = "/">
      <Products products={products} onAddToCart = {handleAddCart}/>
    </Route>
    <Route exact path = "/Cart">
      <Cart cart = {cart} 
      handleUpdateCartQty = {handleUpdateCartQty}
      handleRemoveFromCart={handleRemoveFromCart}
      handleEmptyCart = {handleEmptyCart}
      />
    </Route>
    <Route exact path = "/Checkout">
      <Checkout />
    </Route>
    </Switch>
    </div>
  </Router>
    
  );
}

export default App;
