import './SuccessOrderCard.css'

const SuccessOrderCard: React.FC = () => {
    return(
        <div className='success-order-card__container' id="pay">

            <div className="success-order-card__content">
            <h1>FoodUPS</h1>
                <img src="images/check.png" alt="" />
                <p>Order on the way</p>
                <p>Thanks for you purchase</p>
            </div>
        </div>
    )
}

export default SuccessOrderCard