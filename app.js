const navlist = document.querySelector('.nav-list');
const navItems = ["home","shop","about","contact"];

for(let navelement of navItems){
    let listElement = document.createElement('li');
    listElement.innerHTML = `<a href="#">${navelement}</a>`;
    listElement.classList.add('nav-element');
    navlist.appendChild(listElement);
}