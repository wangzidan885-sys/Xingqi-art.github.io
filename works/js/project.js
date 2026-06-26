const images =
document.querySelectorAll(
'.gallery img'
)

const viewer =
document.getElementById(
'viewer'
)

const viewerImg =
document.getElementById(
'viewerImg'
)

images.forEach(img=>{

img.addEventListener('click',()=>{

viewer.style.display='flex'

viewerImg.src=img.src

})

})

viewer.addEventListener(
'click',
()=>{

viewer.style.display='none'

})

const observer=
new IntersectionObserver(
entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
'show'
)

}

})

})

images.forEach(img=>{

observer.observe(img)

})