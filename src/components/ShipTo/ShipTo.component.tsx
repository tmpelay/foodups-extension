import "./ShipTo.component.css"

interface ShipToProps {
    isOpen: boolean;
    setShipToShow: (isOpen: boolean) => void;
}

const ShipTo: React.FC<ShipToProps> = ({ isOpen, setShipToShow }) => {
    
    const close = () => {
        setShipToShow(false)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-window">
        <div className="ship-to__modal">
            <h2 className="ship-to__title">Ship to</h2>
            <form className="ship-to__form" action="">
                <div className="form__fullname">
                    <div className="form__input-container">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name" placeholder="First Name" />
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <label htmlFor="address">Shopping Address 1</label>
                <input className="input--large" type="text" id="address" placeholder="Shopping Address"/>
                <div className="form__wrapper">
                <div className="form__input-container">
                <label htmlFor="name">Shopping Address 2</label>
                    <input type="text" id="address2" placeholder="Shopping Address 2" />
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">City</label>
                    <input type="text" id="city" placeholder="City" />
                    </div>
                </div>
                <div className="form__wrapper">
                <div className="form__input-container">
                <label htmlFor="name">State</label>
                    <input type="text" id="state" placeholder="State" />
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">Zip Code</label>
                    <input type="text" id="zipcode" placeholder="Zip Code" />
                    </div>
                </div>
            </form>
            <div className="btn-container">
            <button className="ship-to__close" onClick={close}>Save info</button>
            </div>
            
        </div>
        </div>
    )
}

export default ShipTo