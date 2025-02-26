function createHeader() {
  return `
    <header class="header block">
      <div class="header__container _container">
        <div class="language">
          <a href="index-fi.html" class="fi nonactive">FI</a>
          <a href="index.html" class="ru active">RU</a>
          <a href="index-en.html" class="en nonactive">EN</a>
        </div>
        <div class="logo">
          <a class="parrot" href="#">
            <div class="img">
              <img src="src/images/parrotsvg.svg" alt="logo">
            </div>
          </a>
          <div class="logo__title">
            <a href="index.html">
              Переводчик финского языка <br>
              <span>Григорий Конопелько</span>
            </a>
          </div>
        </div>
        <div class="header__contacts">
          <div class="header__phone">
            <a href="tel:+79117770297" class="phone">+7 911 777 02 97</a>
          </div>
          <div class="header__mail">
            <a href="mailto:grigori.konopelko@mail.ru" class="mail">grigori.konopelko@mail.ru</a>
          </div>
        </div>
      </div>
    </header>
  `;
}
