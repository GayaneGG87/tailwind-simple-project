const initApp =()=>{
 const humburgerBtn = document.getElementById('humburger-button')
 const mobileMenu = document.getElementById('mobile-menu')
 const  toggleMenu = ()=>{
    mobileMenu?.classList.toggle('flex')
    mobileMenu?.classList.toggle('hidden')
    humburgerBtn?.classList.toggle('toggle-btn')
 }

 humburgerBtn?.addEventListener('click', toggleMenu)
 mobileMenu?.addEventListener('click', toggleMenu)

}

document.addEventListener('DOMContentLoaded', initApp)