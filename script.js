let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');
const sliderText = document.querySelector('.slider-text');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

function updateImageNum() {
    let numOfImg;
    if (offset === 0) {
        numOfImg = 1;
    } else if (offset === 384) {
        numOfImg = 2;
    } else if (offset === 768) { 
        numOfImg = 3;
    } else if (offset === 1152) { 
        numOfImg = 4;
    } else if (offset === 1536) {
        numOfImg = 5;
    }
    sliderText.innerHTML = `Изображение ${numOfImg} из 5`;
}

sliderNext.addEventListener('click', function () {
    offset += 384;
    if (offset > 1536) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    updateImageNum();
});

sliderPrev.addEventListener('click', function () {
    offset -= 384;
    if (offset < 0) {
        offset = 1536;
    }
    sliderLine.style.left = -offset + 'px';
    updateImageNum();
});

updateImageNum(); //обновление текста при загрузке страницы