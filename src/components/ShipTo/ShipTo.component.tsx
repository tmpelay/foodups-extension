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
            <form className="ship-to__form" action="javascript:;" onSubmit={close}>
                <div className="form__fullname">
                    <div className="form__input-container">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" required />
                    </div>
                </div>
                <label htmlFor="address">Shopping Address 1</label>
                <input className="input--large" type="text" id="address" required/>
                <div className="form__wrapper">
                <div className="form__input-container">
                <label htmlFor="name">Shopping Address 2</label>
                    <input type="text" id="address2" required />
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">City</label>
                    <input type="text" id="city" required/>
                    </div>
                </div>
                <div className="form__wrapper">
                <div className="form__input-container">
                <label htmlFor="name">State</label>
                    <input type="text" id="state" required/>
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">Zip Code</label>
                    <input type="text" id="zipcode" required/>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="ship-to__close" type="submit">Save info</button>
                </div>
            </form>
            
            
        </div>
        </div>
    )
}

export default ShipTo