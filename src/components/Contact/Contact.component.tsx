import "./Contact.component.css"

interface ContactProps {
    isOpen: boolean;
    setContactShow: (isOpen: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, setContactShow }) => {
    
    const close = () => {
        setContactShow(false)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-window">
        <div className="contact__modal">
            <h2 className="contact__title">Contact</h2>
            <form className="contact__form" action="">
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
                <label htmlFor="address">Phone Number</label>
                <input className="input--large" type="text" id="address" placeholder="Phone Number"/>
                <label htmlFor="address">Email</label>
                <input className="input--large" type="email" id="address" placeholder="Email"/>
            </form>
            <div className="btn-container">
            <button className="contact__close" onClick={close}>Save info</button>
            </div>
            
        </div>
        </div>
    )
}

export default Contact