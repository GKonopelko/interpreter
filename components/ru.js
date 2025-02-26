export const ruHeader = `
<header class="header block">
      <div class="header__container _container">
        <div class="language">
          <a href="index-fi.html" class="fi nonactive" aria-label="Переключиться на финскую версию сайта">FI</a>
          <a href="index.html" class="ru active" aria-label="Переключиться на русскую версию сайта">RU</a>
          <a href="index-en.html" class="en nonactive" aria-label="Переключиться на английскую версию сайта">EN</a>
        </div>
        <div class="logo">
          <a class="parrot" href="index.html" aria-label="Перейти на главную страницу сайта">
            <div class="img">
              <img src="src/images/parrotsvg.svg" alt="Translator Grigori Konopelko logo">
            </div>
          </a>
          <div class="logo__title">
            <a href="index.html" aria-label="Перейти на главную страницу сайта">
              Переводчик финского языка <br>
              <span>Григорий Конопелько</span></a>
          </div>
        </div>
        <div class="header__contacts">
          <div class="header__phone">
            <a href="tel:+79117770297" class="phone"
              aria-label="Позвонить переводчику финского языка">+7&nbsp;911&nbsp;777&nbsp;02&nbsp;97 </a>
          </div>
          <div class="header__mail">
            <a href="mailto:grigori.konopelko@mail.ru" class="mail"
              aria-label="Написать письмо переводчику финского языка"> grigori.konopelko@mail.ru
            </a>
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
              <a href="index.html" class="menu__link" aria-label="Главная страница">
                <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.96295 22.2193L7.0953 16.8471M41.963 22.2193L36.8306 16.8471M36.8306 16.8471L22.686 2.04152C22.2921 1.62923 21.6338 1.62923 21.2399 2.04152L7.0953 16.8471M36.8306 16.8471V40.2847C36.8306 40.837 36.3829 41.2847 35.8306 41.2847H27.3489C26.7966 41.2847 26.3489 40.837 26.3489 40.2847V28.0791C26.3489 27.5268 25.9012 27.0791 25.3489 27.0791H18.7524C18.2001 27.0791 17.7524 27.5268 17.7524 28.0791V40.2847C17.7524 40.837 17.3047 41.2847 16.7524 41.2847H8.0953C7.54301 41.2847 7.0953 40.837 7.0953 40.2847V16.8471"
                    stroke="#00459E" stroke-width="3" />
                </svg> </a>

            </li>
            <li class="menu__item interpreting">
              <a href="interpreting-ru.html" class="menu__link"
                aria-label="Устный перевод на финский язык и с финского языка"> Устный</a>
            </li>
            <li class="menu__item translation">
              <a href="translation-ru.html" class="menu__link" aria-label="Услуги по письменному переводу">
                Письменный</a>
            </li>
            <li class="menu__item price">
              <a href="price-ru.html" class="menu__link" aria-label="Стоимость перевода и связанных услуг"> Цена </a>
            </li>
            <li class="menu__item questions">
              <a href="questions-ru.html" class="menu__link" aria-label="Вопросы про перевод"> Вопросы </a>
            </li>
            <li class="menu__item contact">
              <a href="contacts-ru.html" class="menu__link" aria-label="Контакты переводчика финского языка"> Контакты
              </a>
            </li>
          </ul>
        </div>
        <div class="contacts">
          <a href="tel:+79117770297" class="phone" aria-label="Позвонить переводчику финского языка">
            <span class="visually-hidden">Позвонить&nbsp;по&nbsp;телефону</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.7768 11.0625L10.9518 4.68121C10.1933 2.96763 8.5268 1.36241 6.68351 1.70018C6.46666 1.73992 6.23189 1.80113 5.96868 1.89032C4.4472 2.40593 3.33587 3.96182 2.42371 6.08286C-3.26094 19.2545 21.2252 41.0335 31.3622 37.1903C34.3141 36.2988 35.4946 35.4489 36.9054 33.1425C37.2817 32.3455 37.4858 31.6693 37.5532 30.8863C37.6943 29.2471 36.5434 27.8198 35.0781 27.0716L31.6965 25.3448C29.8939 24.4243 27.6918 24.9135 26.4485 26.5105C25.1967 28.1184 22.96 28.6258 21.2029 27.594C17.7229 25.5506 15.1338 23.4201 12.3183 19.6345C11.1023 17.9996 11.1895 15.7802 12.3233 14.0873C13.3985 12.4818 13.9233 11.512 13.7768 11.0625Z"
                stroke="white" stroke-width="3" />
            </svg>

          </a>
        </div>
        <div class="contacts">
          <a href="mailto:grigori.konopelko@mail.ru" class="mail"
            aria-label="Написать письмо переводчику финского языка">
            <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <a href="index-fi.html" class="fi nonactive" aria-label="Переключиться на финскую версию сайта">FI</a>
        </div>
        <div class="languages">
          <a href="index-en.html" class="en nonactive" aria-label="Переключиться на английскую версию сайта">EN</a>
        </div>
      </div>

    </nav>
`

export const ruFooter = `
    <footer class="footer block">
      <div class="footer__container _container">
        <div class="order">
          <p>Для оценки стоимости и сроков письменного перевода вышлите файл/скан/фото по электронной почте &nbsp; <a
              href="mailto:grigori.konopelko@mail.ru" class="mail linkUderlined"
              aria-label="Написать письмо переводчику финского языка"> grigori.konopelko@mail.ru</a> &nbsp;
            или &nbsp;
            <a href="tg://resolve?domain=https://t.me/GrigoriKonopelko" class="linkUderlined"
              aria-label="Связаться через Telegram">Telegram</a> &nbsp;
            <a href="whatsapp://send?phone=+79117770297" class="linkUderlined"
              aria-label="Связаться через WhatsApp">WhatsApp</a>.
          </p>
        </div>
        <br>
        <ul class="footer__menu">
          <li class="footer__item home">
            <a href="index.html" class="menu__link" aria-label="Переводчик финского языка Григорий Конопелько"> &#10144;
              Переводчик финского языка Григорий Конопелько </a>
          </li>
          <li class="footer__item interpreting">
            <a href="interpreting-ru.html" class="menu__link" aria-label="Устный перевод на финский язык и с финского
              языка"> &#10144; Устный перевод на финский язык и с финского
              языка</a>
          </li>
          <li class="footer__item translation">
            <a href="translation-ru.html" class="menu__link" aria-label="Письменный перевод на финский язык и с финского
              языка">
              &#10144; Письменный перевод на финский язык и с финского языка
            </a>
          </li>
          <li class="footer__item"><a href="certification-ru.html" aria-label="Заверение переводов на финский язык и с финского
              языка">&#10144; Заверение перевода</a></li>
          <li class="footer__item"><a href="apostille-ru.html" aria-label="Проставление апостиля на перевод на финский язык и с финского
              языка">&#10144; Проставление апостиля</a></li>
          <li class="footer__item price">
            <a href="price-ru.html" class="menu__link" aria-label="Стоимость перевода на финский язык и с финского
              языка"> &#10144; Стоимость перевода и связанных услуг </a>
          </li>
          <li class="footer__item questions">
            <a href="questions-ru.html" class="menu__link" aria-label="Вопросы о перевода"> &#10144; Вопросы о переводе
            </a>
          </li>
          <li class="footer__item notes">
            <a href="notes-ru.html" class="menu__link" aria-label="Заметки о финском языке"> &#10144; Заметки о финском
              языке </a>
          </li>
          <li class="footer__item"><a href="cv-ru.html" aria-label="Резюме переводчика финского языка">&#10144; Резюме
              переводчика финского языка</a></li>
          <li class="footer__item"><a href="https://grigori.konopelko.com/" aria-label="Преподаватель финского языка"
              target="_blank">&#10144; Обучение финскому
              языку</a></li>
          <li class="footer__item"><a href="contacts-ru.html" aria-label="Контакты переводчика финского языка">&#10144;
              Контакты</a></li>
          <li class="footer__item map">
            <a href="map-ru.html" class="menu__link" aria-label="Карта сайта"> &#10144; Карта сайта </a>
          </li>
        </ul>
        <br>
        <p> © Григорий Конопелько, 2024</p>

      </div>
    </footer>
`