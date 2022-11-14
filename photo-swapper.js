const images = ['images/Act%20Up.jpeg', 'images/soft.jpeg']
let idx = 0; // starting index
let maxImages = images.length - 1;
const timer = setInterval(function() {
    let curImage = images[index];
    idx = (idx == maxImages) ? 0 : ++idx;
    // set your image using the curImageVar 
    $('#work-photo').attr('src',curImage);
 }, 1000);