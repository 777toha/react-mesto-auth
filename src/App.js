import logo from './image/logo_header.svg';

function App() {
  return (
    <div className="page">

    <header className="header">
        <img className="header__logo" src={logo} alt="место" name="avatar"/>
    </header>

    <main>

        <section className="profile">
            <div className="profile__avatar"></div>
            <div className="profile__info">
                <div className="profile__container">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__edit-button"></button>
                </div>
                <h2 className="profile__subtitle">Исследователь океана</h2>
            </div>
            <button className="profile__add-button" type="button"></button>
        </section>

        <section className="elements"></section>
    </main>

    <footer className="footer">
        <p className="footer__copyrights">© 2022 Mesto Russia</p>
    </footer>

    <section className="popup popup_profile">
        <div className="popup__container popup__overlay">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="popupForm" novalidate>
                <input className="popup__input popup__input_data_name" placeholder="Имя" name="name" type="text" 
                id="profile-name" minlength="2" maxlength="40" 
                pattern="^[a-zA-Zа-яА-я-\s]+$" required/>
                <span className="popup__input-error profile-name-error"></span>
                <input className="popup__input popup__input_data_profession" name="job" placeholder="Профессия" 
                type="text" value="" id="profile-profession" minlength="2" maxlength="200" 
                pattern="^[a-zA-Zа-яА-я-\s]+$" required/>
                <span className="popup__input-error profile-profession-error"></span>
                <button className="popup__save" type="submit">Сохранить</button>
            </form>
        </div>
    </section>

    <section className="popup popup_card-add">
        <div className="popup__container popup__overlay">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="popupForm" novalidate>
                <input className="popup__input popup__input_data_name" placeholder="Название" 
                type="text" name="name" id="card-add-name" minlength="2" maxlength="30" 
                pattern="^[a-zA-Zа-яА-я-\s]+$" required/>
                <span className="popup__input-error card-add-name-error"></span>
                <input className="popup__input popup__input_data_profession" 
                placeholder="Ссылка на картинку" type="url" value="" name="url" 
                id="card-add-url" required/>
                <span className="popup__input-error card-add-url-error"></span>
                <button className="popup__save" type="submit">Сохранить</button>
            </form>
        </div>
    </section>

    <section className="popup popup_zoom-image">
        <figure className="popup__figure popup__overlay">
          <img src="#" className="popup__image" alt="#"/>
          <figcaption className="popup__caption"></figcaption>
          <button type="button" className="popup__close"></button>
        </figure>
    </section>

    <section className="popup popup_confirm-delete">
        <div className="popup__container popup__overlay">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form popup__form-confirm" name="popupForm" novalidate>
                <button className="popup__save" type="submite">Да</button>
            </form>
        </div>
    </section>

    <section className="popup popup_avatar">
        <div className="popup__container popup__overlay">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="popupForm" novalidate>
                <input className="popup__input popup__input_avatar-url" placeholder="Ссылка на картинку" 
                type="url" name="avatar" id="avatar-url" required/>
                <span className="popup__input-error avatar-url-error"></span>
                <button className="popup__save" type="submit">Сохранить</button>
            </form>
        </div>
    </section>

    <template id="element-template">
        <div className="element">
            <button className="element__trash" type="button"></button>
            <img className="element__image" src="#" alt="#"/>
            <div className="element__container">
                <h2 className="element__title"></h2>
                <div className="element__like">
                    <button className="element__like-button" type="button"></button>
                    <p className="element__counter-like">0</p>
                </div>    
            </div>
        </div>
    </template>

</div>
  );
}

export default App;