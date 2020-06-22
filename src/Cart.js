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
    handleIncreaseQuantity = (product) => {
        //console.log('increase:',product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
         this.setState({
             products: products
         })
    }

    handleDecreaseQuantity = (product) => {
        //console.log('decrease',product);
        const { products } = this.state;
        const index = products.indexOf(product);
       
        if( products[index].qty > 0 ){
            products[index].qty -= 1;
            this.setState({
                products: products
            })
        }
    }

    handleDeleteProduct = (id) => {
        //console.log('delete', id);
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);

        this.setState({
            products: items
        })
    }

    render() {
        const { products } = this.state;
        return(
            <div className="cart" >
                { products.map((product)=>{

                    return (
                        <CartItem 
                            product = {product} 
                            key = {product.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        /> 
                    )  

                }) }
                
                
            </div>
        );
    }
}


export default Cart;