import React from 'react';

class CartItem extends React.Component{
    render() {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style= { styles.image }  alt="cartImage" src="#" />
                </div>

                <div className="right-block">
                    <div style={ { fontSize: 25 }}>Title</div>
                    <div style={ { color: '#777' } }>Price</div>
                    <div style={ { color: '#777' } }>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                    </div>
                </div>

            </div>
        );
    }
}

// ---- styling using Object ----
const styles={
    image: {
        height: 110, //---- (px) by default
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;