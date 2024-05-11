import "./Order.component.css"

type order = {
    id: number;
    price: string;
    name: string;
    image: string,
    description: string
    quantity: number
  }

  interface OrderProps {
    orderInfo: order
  }

  const Order: React.FC<OrderProps> = ({ orderInfo }) => {

    const pad = (d: number) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    return(
        <div className="your-order__order">
            <p className='order__price'>{"$" + orderInfo.price}</p>
            <img className='order__img' src={"images/" + orderInfo.image} alt="" />
            <div className="order__info">
                <h3>{orderInfo.name}</h3>
                <p>{orderInfo.description}</p>
            </div>
            <p className='order__quantity'>{pad(orderInfo.quantity)}</p>
        </div>
    )
}

export default Order