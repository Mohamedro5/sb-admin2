import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Card'
import CardItem from './CardItem'
import { useState } from 'react';


function App() {
  const products = [
{
  id:1,
  title:'IPhone',
  price:40000
},
{
  id:2,
  title:'Sam',
  price:50000
},
{
  id:3,
  title:'Oneplus',
  price:30000
},
{
  id:4,
  title:'Oppo',
  price:50000
},
{
  id:5,
  title:'Vivo',
  price:15000
},
{
  id:6,
  title:'Lg',
  price:100000
},
]

const [cartitems,setCartItem] = useState([])
const [total,setTotal] =  useState(0)

let Handleaddtocart = (id)=>
{
  const productIndex =  products.findIndex(Obj => Obj.id===id)
  const product = products[productIndex]
  setCartItem([...cartitems,product])
  setTotal(total + product.price)
}
let Handleremovecart = (id)=>
{
  const cartItemIndex =  cartitems.findIndex(Obj => Obj.id === id)
  setTotal(total - cartitems[cartItemIndex].price)
  cartitems.splice(cartItemIndex,1)
  setCartItem([...cartitems])
}

  return (

    <div className="container">

      <div className="row">
        <div className="row">
          <div className="col-lg-12">
            <h4>Products</h4>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
           {
             products.map((product)=>
             {
               return <Card cartitems={cartitems} data={product} Handleaddtocart={Handleaddtocart}/>
            }
             
             )
           }

          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <h3>Cart</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ol className="list-group list-group-numbered">
                {
                  cartitems.map((item)=>
                  {
                    return(
                      <CardItem data={item}Handleremovecart={Handleremovecart}/>
                    )
                  }
                  )
                }
              </ol>
              <h2>Total : {total}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default App;