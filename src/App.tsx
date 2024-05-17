//import { Route, Routes } from 'react-router-dom';

import OrderCard from './components/OrderCard/OrderCard.component'

import './App.css'
import CheckoutCard from './components/CheckoutCard/CheckoutCard.component';
import SuccessOrderCard from './components/SuccessOrderCard/SuccessOrderCard';
import WelcomeCard from './components/WelcomeCard/WelcomeCard.component';

function App() {

  type user = {
    id: number;
    userName: string;
    address: string;
    number: string,
    profileIcon: string
  }

  type Product = {
    id: number;
    price: string;
    name: string;
    image: string,
    description: string
    quantity: number
}

  type order = {
    id: number;
    price: string;
    name: string;
    image: string,
    description: string
    quantity: number,
    products: Product[]
  }



  const userInfo: user = {
    id: 0,
    userName: "Hubert Leo",
    address: "20 W 34th.St, New York, NY 10001, United States",
    number: "+1 212 736 3100",
    profileIcon: "profile.png"
  }

  const orders: order[] = [
    {
      id: 0,
      price: "5,99",
      name: "Bagel w/ Chesse",
      image: "bagel.jpeg",
      description: "Plain Bagel Chesse",
      quantity: 1,
      products: [
        {
          id: 0,
          price: "5,99",
          name: "Bagel w/ Chesse",
          image: "bagel.jpeg",
          description: "Plain Bagel Chesse",
          quantity: 1,
        },{
          id: 1,
          price: "3,99",
          name: "Oteer 0rder",
          image: "bagel.jpeg",
          description: "Desc",
          quantity: 2,
        }
      ]
    }
  ]

  return (
    <div className='app-wrapper'>
      <WelcomeCard></WelcomeCard>
      <OrderCard userInfo={userInfo} orders={orders} />
      <CheckoutCard price={7.99}/>
      <SuccessOrderCard></SuccessOrderCard>
    </div>
  )
}

export default App
