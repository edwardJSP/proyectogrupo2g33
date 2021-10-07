function toggleSearch() {
    document.getElementById("in-buscar").classList.toggle('hidden');
    document.getElementById("btn-search").classList.toggle('search-close');
    document.getElementById("in-buscar").focus();
};
function toggleMenuUser() {
    document.getElementById("menu-user").classList.toggle('hidden');
    document.getElementById("user-card").classList.toggle('menu-user-toggle');
};

function togglePanel() {
    document.getElementById("sm1").classList.toggle('hidden');
    document.getElementById("sm2").classList.toggle('hidden');
    document.getElementById("sm3").classList.toggle('hidden');
    document.getElementById("sm4").classList.toggle('hidden');
    document.getElementById("sm5").classList.toggle('hidden');
    document.getElementById("sm6").classList.toggle('hidden');
    document.getElementById("sm").classList.toggle('sidebar-toggle');
};

function itemInfo() {
    document.getElementById("item-show").classList.toggle('hidden');
};


    
