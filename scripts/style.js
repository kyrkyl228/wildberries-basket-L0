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
    const borderId = document.getElementById(border);
    const valueId = document.getElementById('chapter-basket-head-value-id');
    const checkboxId = document.getElementById('select-all-checkbox-id');
    const nameId = document.getElementById('select-all-name-id');
    if (th.style.transform === 'rotate(180deg)') {
        th.style.transform = 'rotate(0deg)';
        document.getElementById(chapter).style.display = 'grid';
        if(chapter != 'content__absent-id'){
            borderId.style.paddingBottom = '0';
            borderId.style.borderBottom = '0';
            valueId.style.display = 'none';
            checkboxId.style.display = 'block';
            nameId.style.display = 'block';
        }
    } else {
        th.style.transform = 'rotate(180deg)';
        document.getElementById(chapter).style.display = 'none'
        if(chapter != 'content__absent-id'){
            borderId.style.paddingBottom = '15px';
            borderId.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
            valueId.style.display = 'block';
            checkboxId.style.display = 'none';
            nameId.style.display = 'none';
        }

    }
}