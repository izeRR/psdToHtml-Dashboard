'use strict';
var showMenuBtn = document.getElementById("show-menu");
var albums = document.getElementById("albums");
var sidebar = document.getElementById("sidebar");

showMenuBtn.addEventListener("click",function(){
    if(!(showMenuBtn.classList.toggle("active"))){
        sidebar.classList.remove("active");
        albums.classList.remove("active");
    }
    else{
        sidebar.classList.add("active");
        albums.classList.add("active");
    }
});