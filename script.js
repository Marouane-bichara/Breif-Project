let menu = document.getElementById("menu-icon");
let navlist = document.querySelector('.top_links');

menu.onclick = () =>
{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
