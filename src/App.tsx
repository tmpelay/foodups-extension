import './App.css'
import OrderCard from './components/OrderCard/OrderCard.component'

function App() {

  type user = {
    id: number;
    userName: string;
    address: string;
    number: string,
    profileIcon: string
  }

  type order = {
    id: number;
    price: string;
    name: string;
    image: string,
    description: string
    quantity: number
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
      quantity: 1
    },
    {
      id: 1,
      price: "3,99",
      name: "Oteer 0rder",
      image: "bagel.jpeg",
      description: "Desc",
      quantity: 2
    },
    {
      id: 0,
      price: "5,99",
      name: "Bagel w/ Chesse",
      image: "bagel.jpeg",
      description: "Plain Bagel Chesse",
      quantity: 1
    },
    {
      id: 1,
      price: "3,99",
      name: "Other Order",
      image: "bagel.jpeg",
      description: "Desc",
      quantity: 2
    }
  ]

  return (
    <>
      <OrderCard userInfo={userInfo} orders={orders}></OrderCard>
    </>
  )
}

export default App
