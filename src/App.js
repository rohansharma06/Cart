import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
    //---- as cartItem is extend from react.comp so we have to call (super) for parenr class
      super();   
      this.state = {
          products : [],
          loading : true
      }

      this.db = firebase.firestore();
      // bind is use to store the this proberty/ we can use arrow function insted of bind
          //this.increaseQuantity = this.increaseQuantity.bind(this)
  }

  //---- lifecycle method to fetch data from server and display on browser
  componentDidMount(){

    //--- on any update in firebase we have to refresh the page to get update on browser ----
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     });

    //     const products = snapshot.docs.map((doc) =>{
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     });
    //     this.setState({
    //       products,
    //       loading: false
    //     });

    //   });

    // ##################################

    //--- on any update in firebase onSnapshot()[listener] will automaticaly update the browser ----
    this.db
      .collection('products')
      // .where('price', '<=', 300) //(to get only thoes data whorice price<=300) 
      // .orderBy('price', 'desc') //(short the data in desc/aesc)
      .onSnapshot((snapshot)=>{
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) =>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        this.setState({
          products,
          loading: false
        });
      });
  }

  handleIncreaseQuantity = (product) => {
      //console.log('increase:',product);
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;
      // this.setState({
      //     products: products
      // })

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
        .update({
          qty: products[index].qty+1
        }).then(() => {
          console.log('Increase Successfully');
        }).catch((err) => {
          console.log('Error',err);
        })
  }

  handleDecreaseQuantity = (product) => {
      //console.log('decrease',product);
      const { products } = this.state;
      const index = products.indexOf(product);
    
      // if( products[index].qty > 0 ){
      //     products[index].qty -= 1;
      //     this.setState({
      //         products: products
      //     })
      // }

      if(products[index].qty === 0){
        return;
      }

      const docRef = this.db.collection('products').doc(products[index].id);

      docRef
      .update({
          qty: products[index].qty-1
      }).then(() => {
        console.log('Decrease Successfully');
      }).catch((err) => {
        console.log('Error',err);
      })

  }

  handleDeleteProduct = (id) => {
      //console.log('delete', id);
      const { products } = this.state;
      
      // const items = products.filter((item) => item.id !== id);
      // this.setState({ products: items })

      const docRef = this.db.collection('products').doc(id);

      docRef
        .delete()
        .then(() => {
          console.log('Product Deleted Successfully');
        }).catch((err) => {
          console.log('Error',err);
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

  addProduct = () =>{
    this.db
      .collection('products')
      .add({
        img: '',
        title: 'Shoes',
        price: 599,
        qty: 4
      }).then((docRef) => {
        console.log('Product addded',docRef);
      }).catch((err) => {
        console.log('Error',err);
      })
  }

  render(){
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding:20, fontSize: 20}} >Add product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct} 
        />
        { loading && <h1>Loading Products...</h1>}
        <div style={ {padding: 5, fontSize: 15} }>TOTAL: {this.getCartTotal()} </div>

      </div>
    );
  }

}


export default App;
