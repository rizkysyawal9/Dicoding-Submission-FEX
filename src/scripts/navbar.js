const hamburgerIcon = document.querySelector('#hamburger')
const drawerElement = document.querySelector('#drawer')
const mainElement = document.querySelector("main")
const overlay = document.querySelector('#overlay')

hamburgerIcon.addEventListener("click", event=> {
    drawerElement.classList.toggle("open")
    overlay.classList.toggle("overlay")
    event.stopPropagation()
})

mainElement.addEventListener("click", event=>{
    drawerElement.classList.remove("open")
    overlay.classList.remove("overlay")
    event.stopPropagation()
})

overlay.addEventListener("click", event=> {
    drawerElement.classList.remove("open")
    overlay.classList.remove("overlay")
    event.stopPropagation()
})

