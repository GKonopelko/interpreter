const fiHeader = `
    <header class="header block" aria-label="Sivuston ylätunniste">
      <div class="header__container _container">
        <div class="language" aria-label="Kielivalinta">
          <a href="index.html" class="ru nonactive" aria-label="Vaihda venäjän kieleen">RU</a>
          <a href="index-fi.html" class="fi active" aria-label="Vaihda suomen kieleen">FI</a>
          <a href="index-en.html" class="en nonactive" aria-label="Vaihda englannin kieleen">EN</a>
        </div>
        <div class="logo">
          <a class="parrot" href="#" aria-label="Siirry etusivulle">
            <div class="img">
              <img src="src/images/parrotsvg.svg" alt="Venäjän käännöstoimisto Grigori Konopelko logo">
            </div>
          </a>
          <div class="logo__title">
            <a href="index-fi.html" aria-label="Siirry etusivulle">
              Venäjän käännöstoimisto <br>
              <span>Grigori Konopelko</span>
            </a>
          </div>
        </div>
        <div class="header__contacts">
          <div class="header__phone">
            <a href="tel:+79117770297" class="phone"
              aria-label="Soita numeroon +7 911 777 02 97">+7&nbsp;911&nbsp;777&nbsp;02&nbsp;97</a>
          </div>
          <div class="header__mail">
            <a href="mailto:grigori.konopelko@mail.ru" class="mail"
              aria-label="Lähetä sähköpostia osoitteeseen grigori.konopelko@mail.ru">grigori.konopelko@mail.ru</a>
          </div>
        </div>
      </div>
    </header>
    <nav class="menu block" aria-label="Päävalikko">
      <div class="menu__wrapper _container">
        <div class="menu__container">
          <input class="menu__input" type="checkbox" id="menu__input" aria-label="Avaa/sulje valikko">
          <label class="menu__label" for="menu__input" aria-label="Avaa/sulje valikko">
            <span class="hamburger__button">
              <span class="menu__label-line" id="sidebar" aria-hidden="true"></span>
            </span>
          </label>
          <ul class="menu__list">
            <li class="menu__item home">
              <a href="index-fi.html" class="menu__link" aria-label="Siirry etusivulle">
                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path
                    d="M1.96295 22.2193L7.0953 16.8471M41.963 22.2193L36.8306 16.8471M36.8306 16.8471L22.686 2.04152C22.2921 1.62923 21.6338 1.62923 21.2399 2.04152L7.0953 16.8471M36.8306 16.8471V40.2847C36.8306 40.837 36.3829 41.2847 35.8306 41.2847H27.3489C26.7966 41.2847 26.3489 40.837 26.3489 40.2847V28.0791C26.3489 27.5268 25.9012 27.0791 25.3489 27.0791H18.7524C18.2001 27.0791 17.7524 27.5268 17.7524 28.0791V40.2847C17.7524 40.837 17.3047 41.2847 16.7524 41.2847H8.0953C7.54301 41.2847 7.0953 40.837 7.0953 40.2847V16.8471"
                    stroke="#00459E" stroke-width="3" />
                </svg>
              </a>
            </li>
            <li class="menu__item interpreting">
              <a href="interpreting-fi.html" class="menu__link" aria-label="Siirry tulkkaus-sivulle">Tulkkaus</a>
            </li>
            <li class="menu__item translation">
              <a href="translation-fi.html" class="menu__link" aria-label="Siirry käännös-sivulle">Käännös</a>
            </li>
            <li class="menu__item cv">
              <a href="cv-fi.html" class="menu__link" aria-label="Siirry tulkki-sivulle">Tulkki</a>
            </li>
            <li class="menu__item questions">
              <a href="questions-fi.html" class="menu__link"
                aria-label="Siirry usein kysyttyihin kysymyksiin">Kysymykset</a>
            </li>
            <li class="menu__item contact">
              <a href="contacts-fi.html" class="menu__link" aria-label="Siirry yhteystietoihin">Yhteys</a>
            </li>
          </ul>
        </div>
        <div class="contacts">
          <a href="tel:+79117770297" class="phone" aria-label="Soita numeroon +7 911 777 02 97">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path
                d="M13.7768 11.0625L10.9518 4.68121C10.1933 2.96763 8.5268 1.36241 6.68351 1.70018C6.46666 1.73992 6.23189 1.80113 5.96868 1.89032C4.4472 2.40593 3.33587 3.96182 2.42371 6.08286C-3.26094 19.2545 21.2252 41.0335 31.3622 37.1903C34.3141 36.2988 35.4946 35.4489 36.9054 33.1425C37.2817 32.3455 37.4858 31.6693 37.5532 30.8863C37.6943 29.2471 36.5434 27.8198 35.0781 27.0716L31.6965 25.3448C29.8939 24.4243 27.6918 24.9135 26.4485 26.5105C25.1967 28.1184 22.96 28.6258 21.2029 27.594C17.7229 25.5506 15.1338 23.4201 12.3183 19.6345C11.1023 17.9996 11.1895 15.7802 12.3233 14.0873C13.3985 12.4818 13.9233 11.512 13.7768 11.0625Z"
                stroke="white" stroke-width="3" />
            </svg>
          </a>
        </div>
        <div class="contacts">
          <a href="mailto:grigori.konopelko@mail.ru" class="mail"
            aria-label="Lähetä sähköpostia osoitteeseen grigori.konopelko@mail.ru">
            <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true">
              <path d="M3.12731 1.9109L19.1287 13.927C19.4864 14.1956 19.9786 14.1944 20.3343 13.924L35.9839 2.02919"
                stroke="white" stroke-width="3" />
              <mask id="path-2-inside-1_224_15" fill="white">
                <rect width="38.3741" height="28.7527" rx="1"
                  transform="matrix(0.999999 0.0012852 -0.000866617 1 0.351929 0.0872803)" />
              </mask>
              <rect width="38.3741" height="28.7527" rx="1"
                transform="matrix(0.999999 0.0012852 -0.000866617 1 0.351929 0.0872803)" stroke="white" stroke-width="6"
                mask="url(#path-2-inside-1_224_15)" />
            </svg>
          </a>
        </div>
        <div class="languages">
          <a href="index.html" class="ru nonactive" aria-label="Vaihda venäjän kieleen">RU</a>
        </div>
        <div class="languages">
          <a href="index-en.html" class="en nonactive" aria-label="Vaihda englannin kieleen">EN</a>
        </div>
      </div>
    </nav>
`

const fiFooter = `
    <footer class="footer block" aria-label="Alatunniste">
      <div class="footer__container _container">
        <div class="order">
          <p>
            Saat käännöksen hinnan lähettämällä tiedoston tai kuvan sähköpostitse:
            <a href="mailto:grigori.konopelko@mail.ru" class="mail"
              aria-label="Lähetä sähköpostia osoitteeseen grigori.konopelko@mail.ru">grigori.konopelko@mail.ru</a>
            tai viestillä
            <a href="tg://resolve?domain=https://t.me/GrigoriKonopelko"
              aria-label="Lähetä viesti Telegramissa">Telegram</a> tai
            <a href="whatsapp://send?phone=+79117770297" aria-label="Lähetä viesti WhatsAppissa">WhatsApp</a>.
          </p>
        </div>
        <br>
        <ul class="footer__menu">
          <li class="footer__item home">
            <a href="index-fi.html" class="menu__link" aria-label="Siirry etusivulle">&#10144; Venäjän käännöstoimisto
              Grigori Konopelko</a>
          </li>
          <li class="footer__item interpreting">
            <a href="interpreting-fi.html" class="menu__link" aria-label="Siirry tulkkaus-sivulle">&#10144; Venäjän
              kielen tulkkaukset</a>
          </li>
          <li class="footer__item translation">
            <a href="translation-fi.html" class="menu__link" aria-label="Siirry käännös-sivulle">&#10144; Venäjän kielen
              käännökset</a>
          </li>
          <li class="footer__item"><a href="cv-fi.html" aria-label="Siirry tulkki-sivulle">&#10144; Venäjän kielen
              kääntäjä ja tulkki</a></li>
          <li class="footer__item questions">
            <a href="questions-fi.html" class="menu__link" aria-label="Siirry usein kysyttyihin kysymyksiin">&#10144;
              Usein kysytyt kysymykset</a>
          </li>
          <li class="footer__item">
            <a href="toimeksiannot-fi.html" class="menu__link" aria-label="Siirry toimeksiantoihin Venäjällä">&#10144;
              Toimeksiannot Venäjällä</a>
          </li>
          <li class="footer__item contact">
            <a href="contacts-fi.html" class="menu__link" aria-label="Siirry yhteystietoihin">&#10144; Yhteystiedot</a>
          </li>
        </ul>
        <br>
        <p>© Käännöstoimisto Grigori Konopelko, 2025</p>
      </div>
    </footer>
`


const bodyWrapper = document.querySelector('.wrapper');

bodyWrapper.insertAdjacentHTML("beforeend", fiFooter);

bodyWrapper.insertAdjacentHTML("afterbegin", fiHeader);