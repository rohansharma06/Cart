import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price: 999,
            title : 'Mobile Phone',
            qty: 1,
            img: ''
        }
        
        // bind is use to store the this proberty/ we can use arrow function insted of bind
            //this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity = () => {
        console.log("This",this);
    }
    render() {
        const { price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style= { styles.image } />
                </div>

                <div className="right-block">
                    <div style={ { fontSize: 25 }}> {title} </div>
                    <div style={ { color: '#777' } }>Rs. {price} </div>
                    <div style={ { color: '#777' } }>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick = {this.increaseQuantity}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        />

                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />
                    </div>
                </div>

            </div>
        );
    }
}

// ---- styling using Object ----
const styles = {
    image: {
        //---- (px) by default
        height: 120, 
        width: 120,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;