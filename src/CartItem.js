import React from 'react';

class CartItem extends React.Component{

   

    //---- function to increase quantity
    increaseQuantity = () => {
        //---- set state (1st way) -use when prev. state is not req
            // this.setState({
            //     qty: this.state.qty+1
            // });

        //--- set state (2nd way) -use when previous state is req
            this.setState((prevState) => {
               return { 
                   qty:prevState.qty+1
               }
            });
    }

    //---- function to decrease quantity
    decreaseQuantity = () => {
        const { qty } = this.state;
        
        if(qty === 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }
    render() {
        const { price, title, qty} = this.props.product;
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
                            onClick = {this.decreaseQuantity}
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