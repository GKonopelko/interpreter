const enHeader = `
      <header class="header block">
        <div class="header__container _container">
          <div class="language">
            <a href="index.html" class="ru nonactive">RU</a>
            <a href="index-en.html" class="en active">EN</a>
            <a href="index-fi.html" class="fi nonactive">FI</a>
          </div>
          <div class="logo">
            <a class="parrot" href="https://konopelko.com/index-en.html">
              <div class="img">
                <img src="src/images/parrotsvg.svg" alt="logo">
              </div>
            </a>
            <div class="logo__title">
              <a href="index.html">
                Russian Translation Agency <br>
                <span>Grigori Konopelko</span>
              </a>
            </div>
          </div>
          <div class="header__contacts">
            <div class="header__phone">
              <a href="tel:+79117770297" class="phone">+7&nbsp;911&nbsp;777&nbsp;02&nbsp;97</a>
            </div>
            <div class="header__mail">
              <a href="mailto:grigori.konopelko@mail.ru" class="mail">grigori.konopelko@mail.ru</a>
            </div>
          </div>
        </div>
      </header>
      <nav class="menu block">
        <div class="menu__wrapper _container">
          <div class="menu__container">
            <input class="menu__input" type="checkbox" id="menu__input">
            <label class="menu__label" for="menu__input">
              <span class="hamburger__button">
                <span class="menu__label-line" id="sidebar"></span>
              </span>
            </label>
            <ul class="menu__list">
              <li class="menu__item home">
                <a href="index-en.html" class="menu__link">Home</a>
              </li>
              <li class="menu__item interpreting">
                <a href="interpreting-en.html" class="menu__link">Interpreting</a>
              </li>
              <li class="menu__item translation">
                <a href="translation-en.html" class="menu__link">Translation</a>
              </li>
              <li class="menu__item questions">
                <a href="price-en.html" class="menu__link">Pricing</a>
              </li>
              <li class="menu__item contact">
                <a href="contacts-en.html" class="menu__link">Contact</a>
              </li>
            </ul>
          </div>
          <div class="contacts">
            <a href="tel:+79117770297" class="phone">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7768 11.0625L10.9518 4.68121C10.1933 2.96763 8.5268 1.36241 6.68351 1.70018C6.46666 1.73992 6.23189 1.80113 5.96868 1.89032C4.4472 2.40593 3.33587 3.96182 2.42371 6.08286C-3.26094 19.2545 21.2252 41.0335 31.3622 37.1903C34.3141 36.2988 35.4946 35.4489 36.9054 33.1425C37.2817 32.3455 37.4858 31.6693 37.5532 30.8863C37.6943 29.2471 36.5434 27.8198 35.0781 27.0716L31.6965 25.3448C29.8939 24.4243 27.6918 24.9135 26.4485 26.5105C25.1967 28.1184 22.96 28.6258 21.2029 27.594C17.7229 25.5506 15.1338 23.4201 12.3183 19.6345C11.1023 17.9996 11.1895 15.7802 12.3233 14.0873C13.3985 12.4818 13.9233 11.512 13.7768 11.0625Z" stroke="white" stroke-width="3"/>
              </svg>
            </a>
          </div>
          <div class="contacts">
            <a href="mailto:grigori.konopelko@mail.ru" class="mail">
              <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.12731 1.9109L19.1287 13.927C19.4864 14.1956 19.9786 14.1944 20.3343 13.924L35.9839 2.02919" stroke="white" stroke-width="3"/>
                <mask id="path-2-inside-1_224_15" fill="white">
                  <rect width="38.3741" height="28.7527" rx="1" transform="matrix(0.999999 0.0012852 -0.000866617 1 0.351929 0.0872803)"/>
                </mask>
                <rect width="38.3741" height="28.7527" rx="1" transform="matrix(0.999999 0.0012852 -0.000866617 1 0.351929 0.0872803)" stroke="white" stroke-width="6" mask="url(#path-2-inside-1_224_15)"/>
              </svg>
            </a>
          </div>
          <div class="languages">
            <a href="index.html" class="ru nonactive">RU</a>
          </div>
          <div class="languages">
            <a href="index-fi.html" class="fi nonactive">FI</a>
          </div>
        </div>
      </nav>
`

const enFooter = `
      <footer class="footer block">
        <div class="footer__container _container">
          <div class="order">
            <p>
              You can find out the price of the translation by sending the file/image by e-mail &nbsp;
              <a href="mailto:grigori.konopelko@mail.ru" class="mail">grigori.konopelko@mail.ru</a> &nbsp; or &nbsp;
              <a href="tg://resolve?domain=https://t.me/GrigoriKonopelko">Telegram</a> &nbsp;
              <a href="whatsapp://send?phone=+79117770297">WhatsApp</a>.
            </p>
          </div>
          <br>
          <ul class="footer__menu">
            <li class="footer__item home">
              <a href="index-en.html" class="menu__link">&#10144; Finnish-Russian Translation Agency Grigori Konopelko</a>
            </li>
            <li class="footer__item interpreting">
              <a href="interpreting-en.html" class="menu__link">&#10144; Finnish-Russian Interpreting</a>
            </li>
            <li class="footer__item translation">
              <a href="translation-en.html" class="menu__link">&#10144; Finnish-Russian Translations</a>
            </li>
            <li class="footer__item">
              <a href="price-en.html">&#10144; Price for Finnish-Russian Translation</a>
            </li>
            <li class="footer__item">
              <a href="contacts-en.html" class="menu__link">&#10144; Finnish-Russian Translator Contacts</a>
            </li>
          </ul>
          <br>
          <p>© Finnish-Russian Translation Agency Grigori Konopelko, 2024</p>
        </div>
      </footer>
`


const bodyWrapper = document.querySelector('.wrapper');

bodyWrapper.insertAdjacentHTML("beforeend", enFooter);

bodyWrapper.insertAdjacentHTML("afterbegin", enHeader);