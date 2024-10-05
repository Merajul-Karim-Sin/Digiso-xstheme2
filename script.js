nav_menu= document.querySelector('.nav-menu')
list_icon=document.querySelector('.list-icon');
cros_icon=document.querySelector('.cros-icon')
dropdown_icon=document.querySelector('.dropdown-icon')

opendropdown.addEventListener("click", ()=>{
    nav_menu.classList.toggle("dropdown-catagoris")
    cros_icon.classList.toggle("close-dropdown-menu")
    dropdown_icon.classList.toggle("open-dropdown-menu")
    console.log("helow");
})