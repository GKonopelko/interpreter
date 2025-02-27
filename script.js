import { ruFooter, ruHeader } from "./components/ru.js";

const bodyWrapper = document.querySelector('.wrapper');

bodyWrapper.insertAdjacentHTML("beforeend", ruFooter);

bodyWrapper.insertAdjacentHTML("afterbegin",ruHeader);