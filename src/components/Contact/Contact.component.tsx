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
            <form className="contact__form" action="javascript:;" onSubmit={close}>
                <div className="form__fullname">
                    <div className="form__input-container">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name" required/>
                    </div>
                    <div className="form__input-container">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" required/>
                    </div>
                </div>
                <label htmlFor="address">Phone Number</label>
                <input className="input--large" type="text" id="address" required />
                <label htmlFor="address">Email</label>
                <input className="input--large" type="email" id="address" required />
                <div className="btn-container">
                    <button type="submit" className="contact__close">Save info</button>
                </div>
            </form>
            
            
        </div>
        </div>
    )
}

export default Contact