function changeImage(image) {
    const hoverSrc = image.getAttribute("data-hover-src");
    image.setAttribute("data-original-src", image.src);
    image.src = hoverSrc;
}
  
function restoreImage(image) {
    const originalSrc = image.getAttribute("data-original-src");
    image.src = originalSrc;
}

function setImage(image){
    image.setAttribute("data-hover-src", image.getAttribute("data-original-src"));
    image.setAttribute("data-original-src", image.src);
}

// ------------

function removeElement(id){
    document.getElementById(id).remove();
}

// -----------

function showElement(id){
    const element = document.getElementById(id);
    element.style.display = 'block';
}

function hideElement(id){
    const element = document.getElementById(id);
    element.style.display = 'none';
}

// ----------

function showModalCard(id){
    const getElement = document.getElementById(id);
    const getTag = document.getElementsByTagName('body')[0];
    getElement.style.display = 'flex';
    getTag.style.overflowY = 'hidden';
}

function hiddenModalCard(id){
    const getElement = document.getElementById(id);
    const getTag = document.getElementsByTagName('body')[0];
    getElement.style.display = 'none';
    getTag.style.overflowY = 'auto';
}

// ---------

const getButFirst = document.getElementById('modal-2__btn-1');
const getButSecond = document.getElementById('modal-2__btn-2');
const getDelBlockCourier = document.getElementById('modal-2__k');
const getDelBlockSelf = document.getElementById('modal-2__s');

function poinOfDelivery(){
    getButFirst.style.border = '2px solid #CB11AB';
    getButSecond.style.border = '2px solid #CB11AB26';
    getDelBlockCourier.style.display = 'none';
    getDelBlockSelf.style.display = 'block';
}

function courier(){
    getButFirst.style.border = '2px solid #CB11AB26';
    getButSecond.style.border = '2px solid #CB11AB';
    getDelBlockCourier.style.display = 'block';
    getDelBlockSelf.style.display = 'none';
}

// ----------

function inputHeadMove(th, id){
    if(th.value){
        document.getElementById(id).style.display = 'block';
    }else if(!th.value){
        document.getElementById(id).style.display = 'none';
    }
}

//--------------------------

function hiddenChapter(th, chapter, border) {
    if (th.style.transform === 'rotate(180deg)') {
        th.style.transform = 'rotate(0deg)';
        document.getElementById(chapter).style.display = 'grid';
        document.getElementById(border).style.paddingBottom = '0';
        document.getElementById(border).style.borderBottom = '0';
    } else {
        th.style.transform = 'rotate(180deg)';
        console.log(document.getElementById(border))
        document.getElementById(chapter).style.display = 'none'
        document.getElementById(border).style.paddingBottom = '15px';
        document.getElementById(border).style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    }
}