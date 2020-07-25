import imagesData from './js/gallery-items.js';

/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */



const galleryRef = document.querySelector(`js-gallery`);
 const htmlElementBuilder = ({preview, original, description},index)=>{
   
        const galleryItem = document.createElement('li');
        const linkItem = document.createElement('a');
        const galleryImg = document.createElement('img');

      
        galleryItem.classList.add('gallery__item');
        linkItem.classList.add(`gallery__link`)
        galleryImg.classList.add('gallery__image');
        galleryImg.alt = description;
        galleryImg.src = preview;
        galleryImg.dataset.index = index;
        galleryImg.setAttribute(data,source);
        galleryImg.dataset.source=original;
        linkItem.href = original;

        linkItem.appendChild(galleryImg );
        galleryItem.appendChild(linkItem);
        return galleryItem


 }
 galleryRef.appendChild(galleryItem)
 console.log(galleryItem)
 htmlElementBuilder(imagesData)