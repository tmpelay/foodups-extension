import './SuccessOrderCard.css'

const SuccessOrderCard: React.FC = () => {
    return(
        <div className='success-order-card__container' id="pay">
            <h1>FoodUPS</h1>
            <div className="success-order-card__content">
                <img src="images/check.png" alt="" />
                <p className='bold-text'>Order on the way</p>
                <p>Thanks for you purchase</p>
            </div>
        </div>
    )
}

export default SuccessOrderCard