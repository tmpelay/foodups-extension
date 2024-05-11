import Order from '../Order/Order.component'

import './OrderCard.component.css'

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
interface OrderCardProps {
    userInfo: user;
    orders: order[];
}

const OrderCard: React.FC<OrderCardProps> = ({ userInfo, orders }) => {
    return(
        <div className="order-card__container">
            <h1>FoodUPS</h1>
            <div className="order-card__registered-info">
                <p className='registered-info__title'>Your registered information</p>
                <div className="registered-info__profile">
                    <img className='profile__img' src={"images/" + userInfo.profileIcon}/>
                    <div className="profile__info">
                        <h3>{userInfo.userName}</h3>
                        <p>{userInfo.address}</p>
                        <p>{userInfo.number}</p>
                    </div>
                </div>
            </div>
            <div className="order-card__your-order">
            <p className='your-order__title'>Your order</p>
            <div className="order-card__orders">
                {
                    orders.map((orderInfo) => {
                        return(
                            <Order key={orderInfo.id} orderInfo={orderInfo}></Order>
                        )
                    })
                }
            </div>
            </div>
            <div className="order-card__sent-to">
                <p className='sent-to__title'>will be sent to</p>
                <div className="sent-to__card">
                    <div className="sent-to__wrapper">
                        <a className='sent-to__expand' href="#"><img src="images/expand.png" alt="" /></a>
                        <p>504 Killigly St, Johnson, RI 02919, United States</p>
                    </div>
                    <img className='sent-to__search' src="images/search.jpg" alt="" />
                </div>
            </div>
            <div className="order-card__price">
                <div className="price__table">
                    <div className="table__row">
                        <p>Sub Order Total</p>
                        <p className='price'> 5,99</p>
                    </div>
                    <div className="table__row">
                        <p className='price'>FoodUPS</p>
                        <p className='price'> 1,99</p>
                    </div>
                    <div className="table__row">
                        <p>Total</p>
                        <p className='price'> 7,99</p>
                    </div>
                </div>
                <div className="price__pay">
                    <p>Checkout and shipment with <span>FoodUPS</span></p>
                </div>
            </div>
            <div className="order-card__working-with">
                <p>Working with <span>stripe</span></p>
            </div>
        </div>
    )
}

export default OrderCard