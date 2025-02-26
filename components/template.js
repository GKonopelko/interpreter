const newDiv = document.createElement('title');
// newDiv.innerHTML = "<h1>Привет!</h1>";
newDiv.innerHTML = 'Приветgggggggggggggggggggggggggggggggggggggg!';
document.body.append(newDiv);

const wrapper = document.querySelector('.wrapper');
const headerRu = document.querySelector('#header-ru');
const navRu = document.querySelector('#nav-ru');
const headerRuClone = headerRu.content.cloneNode(true);
console.log(navRu);

// const navRuClone = navRu.content.cloneNode(true);

wrapper.append(headerRuClone);
