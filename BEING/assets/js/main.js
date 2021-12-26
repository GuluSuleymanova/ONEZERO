const indexSelector = document.querySelectorAll(".langpost");

const langAz =()=> {
    indexSelector[0].innerHTML = "Ana Səhifə";
    indexSelector[1].innerHTML = "Məqalə";
    indexSelector[2].innerHTML = "Yazı Xüsusiyyətləri";
    indexSelector[3].innerHTML = "İncəsənət & Dizayn";
    indexSelector[4].innerHTML = "Səhifələr";
    indexSelector[5].innerHTML = "Əlaqə";
}

const langEn =()=> {
    indexSelector[0].innerHTML = "Home";
    indexSelector[1].innerHTML = "Blog";
    indexSelector[2].innerHTML = "Posts Features";
    indexSelector[3].innerHTML = "Art & Design";
    indexSelector[4].innerHTML = "Pages";
    indexSelector[5].innerHTML = "Contact";
}





document.querySelector(".langaz").addEventListener('click',langAz);
document.querySelector(".langen").addEventListener('click',langEn);
