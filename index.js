let pictures = [
    'img/tomato-red-large.png',
    'img/tomato-yellow-large.png',
    'img/tomato-strange-large.png'
]

let thumbnails = document.querySelectorAll('.gallery__picture-preview')
let fullPhoto = document.querySelector('.full-picture')

let addThumbnailClickHandler = function (preview, picture) {
    preview.addEventListener('click', function () {
        fullPhoto.src = picture;
    })
}

for (let i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], pictures[i]);
}