import images from './gallery-items.js';

const refs = {
    galleryList: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('.js-lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    modalImg: document.querySelector('.lightbox__image'),
    closeBtn: document.querySelector('.lightbox__button'),
};

const cardsEl = createGalleryEl(images);
refs.galleryList.insertAdjacentHTML('beforeend', cardsEl);
refs.galleryList.addEventListener('click', onImageClick);


refs.overlay.addEventListener('click', onCloseBtn);
refs.closeBtn.addEventListener('click', onCloseBtn);
window.addEventListener('keydown', onEscapeClose);

console.log(createGalleryEl(images));

function createGalleryEl(images) {
    return images.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </li>`;
    }).join('');
};

function onImageClick(event) {
    refs.modalWindow.classList.add('is-open');
    refs.modalImg.src = event.target.dataset.source;
};

function onCloseBtn(event) {
    refs.modalWindow.classList.remove('is-open');
    refs.modalImg.src = '';
};

function onEscapeClose(event) {
    if (event.code === 'Escape') {
        return onCloseBtn()
    };
};






