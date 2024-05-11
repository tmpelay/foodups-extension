import './CheckoutCard.component.css'

interface CheckoutCardProps {
    price: number
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({ price }) => {
    return(
        <div className='checkout-card__container' id="checkout">
            <img src="images/foodups-logo.png" alt="FoodUPS" />
            <div className="checkout-card__content">
                <p>You will be redirected with stripe</p>
                    <div className="content__pay">
                        <a className='checkout-card__link' href="#pay">
                            <div className='link-wrapper'>
                                <p>Pay with</p>
                                <img src="images/stripe-logo-light.png" alt="Stripe" />
                            </div>
                            <p className='link-price'>{"$" + price}</p>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard