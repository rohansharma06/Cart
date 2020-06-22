import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();  //---- as cartItem is extend from react.comp so we have to call super for parenr class 
        this.state = {
            products: [
                {
                    price: 149,
                    title : 'Watch',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title : 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title : 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }

        // bind is use to store the this proberty/ we can use arrow function insted of bind
            //this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    render() {
        const { products } = this.state;
        return(
            <div className="cart" >
                { products.map((product)=>{

                    return (
                        <CartItem 
                            product={product} 
                            key={product.id} 
                        /> 
                    )  
                      
                }) }
                
                
            </div>
        );
    }
}


export default Cart;