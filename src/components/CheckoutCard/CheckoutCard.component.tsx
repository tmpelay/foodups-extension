import './CheckoutCard.component.css'

const CheckoutCard: React.FC = () => {
    return(
        <div className='checkout-card__container' id="checkout">
            <h1>FoodUPS</h1>
            <div className="checkout-card__content">
                <p>You will be redirected with stripe</p>
                <div className="content__pay">
                    <a href='#pay'>Pay with <span>Stripe</span></a>
                    <p>$7.98</p>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard