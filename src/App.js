import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
      super();  //---- as cartItem is extend from react.comp so we have to call super for parenr class 
      this.state = {
          products: [
              {
                  price: 149,
                  title : 'Watch',
                  qty: 2,
                  img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  id: 1
              },
              {
                  price: 999,
                  title : 'Mobile Phone',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
                  id: 2
              },
              {
                  price: 9999,
                  title : 'Laptop',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
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

  getCartCount = () => {

    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
       count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render(){
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct} 
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>

      </div>
    );
  }

}


export default App;
