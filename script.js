let time  = 2000
let images = document.querySelectorAll('#slider img')
currentImageIndex = 0
maxImage = images.length

function nextImage () {

    images[currentImageIndex].classList.remove('select')

    currentImageIndex++

    
    if(currentImageIndex >= maxImage){
        currentImageIndex = 0
    }
    


    images[currentImageIndex].classList.add('select')

}


function start(){


    setInterval(() => {
        nextImage()
    },time)

    
}


window.addEventListener('load', start)