function toggleSearch() {
    document.getElementById("in-buscar").classList.toggle('hidden');
    document.getElementById("btn-search").classList.toggle('search-close');
    document.getElementById("in-buscar").focus();
};
function toggleMenuUser() {
    document.getElementById("menu-user").classList.toggle('hidden');
    document.getElementById("btn-user").classList.toggle('menu-user-toggle');
};