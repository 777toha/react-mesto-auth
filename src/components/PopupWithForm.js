function PopupWithForm(props) {


    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__overlay">
                <button className="popup__close" type="button" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form 
                className="popup__form popup__form-confirm" 
                name={props.name} 
                onSubmit={props.onSubmit}
                noValidate>
                    {props.children}
                    <button className="popup__save" type="submite">{props.buttonText}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm