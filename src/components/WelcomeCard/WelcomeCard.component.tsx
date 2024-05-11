import "./WelcomeCard.component.css"

const WelcomeCard: React.FC = () => {
    return(
        <div className="welcome-card__container">
            <img src="images/foodups-logo.png" alt="FoodUPS" />
            <div className="welcome-card__content">
                <h2>Welcome to FoodUPS</h2>
                <p>To start ordering trought our platform. go to the checkout section of a Manhattan based restaurant on Uber Eats</p>
                <p className="welcome-card__bold-text">Here's what we need from your order:</p>
                <ul className="welcome-card__list">
                    <li className="list__element">
                        <img src="images/check.png" alt="" />
                        <p className="list__element-text">&gt;$50 subtotal</p>
                    </li>
                    <li className="list__element">
                        <img src="images/check.png" alt="" />
                        <p className="list__element-text">Restricted Items, Desserts, Uncooked Seafood, Alcohol</p>
                    </li>
                    <li className="list__element">
                        <img src="images/check.png" alt="" />
                        <p className="list__element-text">Lower Manhattan Based Zipcodes</p>
                    </li>
                </ul>
                <a className="welcome-card__link" href="#order">start analyzing the order</a>
            </div>
        </div>
 )
}

export default WelcomeCard