import React from 'react';
import "./Order.component.css";

type Product = {
    id: number;
    price: string;
    name: string;
    image: string,
    description: string
    quantity: number
}

interface OrderProps {
    products?: Product[];  // Ahora acepta una lista de productos
}

const Order: React.FC<OrderProps> = ({ products }) => {
    const pad = (d: number) => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    if (!products){
        return <div>No products available.</div>
    }

    return(
        <div>
            {products.map(product => (
                <div key={product.id} className="your-order__order">
                    <p className='order__price'>{"$" + product.price}</p>
                    <img className='order__img' src={product.image} alt="" />
                    <div className="order__info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                    <p className='order__quantity'>{pad(product.quantity)}</p>
                </div>
            ))}
        </div>
    );
}

export default Order;
