const $navToggle=document.querySelector('.nav-toggle')
const $nav=document.querySelector('nav')
const $iconNav=document.querySelectorAll('.iconBtn')
const $hamburquer=document.querySelector('#hamburquer')
$navToggle.addEventListener('click',()=>{
    $nav.classList.toggle('open')
    $iconNav.forEach((icon)=>{
        icon.classList.toggle('hidden')
    })
})
window.addEventListener('resize',()=>{
    if(document.body.clientWidth>720){
        $nav.classList.remove('open')
        $iconNav.forEach((icon)=>{
            icon.classList.add('hidden')
        })
        $hamburquer.classList.remove('hidden')
    }
})