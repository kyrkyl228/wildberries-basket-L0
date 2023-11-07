const getNameInp = document.getElementById('val-1-i');
const getNameWarning = document.getElementById('val-1-p');
const getSecondNameInp = document.getElementById('val-2-i');
const getSecondNameWarning = document.getElementById('val-2-p');
const getMailInp = document.getElementById('val-3-i');
const getMailWarning = document.getElementById('val-3-p');
const getPhoneInp = document.getElementById('val-4-i');
const getPhoneWarning = document.getElementById('val-4-p');
const getInnInp = document.getElementById('val-5-i');
const getInnWarning = document.getElementById('val-5-p');

const pattern = /^[a-z][a-zA-Z]*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+\d{10,}$/;
const innPattern = /^\d{12}$/;


function inputMiss(inp, warning){
    inp.setAttribute('validate', 'false');
    inp.style.borderBottom = '1px solid #F55123';
    inp.style.color = '#F55123';
    warning.style.display = 'block';
    warning.style.color = '#F55123';
}

function inputRight(inp, warning){
    inp.setAttribute('validate', '');
    inp.style.borderBottom = '';
    inp.style.color = 'black';
    warning.style.display = 'none';
    warning.style.color = '#9797AF';
}

function onBlurNameInput(){
    if(getNameInp.getAttribute('validate') == 'false'){
        if (pattern.test(getNameInp.value)) {
            inputRight(getNameInp, getNameWarning);
        }
    }
}

function onBlurSecondNameInput(){
    if(getSecondNameInp.getAttribute('validate') == 'false'){
        if (pattern.test(getSecondNameInp.value)) {
            inputRight(getSecondNameInp, getSecondNameWarning);
        }
    }
}

function onBlurMailInput(){
    if(getMailInp.getAttribute('validate') == 'false'){
        if (emailPattern.test(getMailInp.value)) {
            inputRight(getMailInp, getMailWarning);
        }
    }
}

function onBlurPhoneInput(){
    if(getPhoneInp.getAttribute('validate') == 'false'){
        if (phonePattern.test(getPhoneInp.value)) {
            inputRight(getPhoneInp, getPhoneWarning);
        }
    }
}

function onBlurInnInput(){
    if(getInnInp.getAttribute('validate') == 'false'){
        if (innPattern.test(getInnInp.value)) {
            inputRight(getInnInp, getInnWarning);
        }
    }
}

function validate(){
    if (!pattern.test(getNameInp.value)) {
        inputMiss(getNameInp, getNameWarning);
    }
    if (!pattern.test(getSecondNameInp.value)) {
        inputMiss(getSecondNameInp, getSecondNameWarning);
    }
    if (!emailPattern.test(getMailInp.value)) {
        inputMiss(getMailInp, getMailWarning);
    }
    if (!phonePattern.test(getPhoneInp.value)) {
        inputMiss(getPhoneInp, getPhoneWarning);
    }
    if (!innPattern.test(getInnInp.value)) {
        inputMiss(getInnInp, getInnWarning);
    }
}

// --------------------------------------------

let shop = {
    total: 2101063,
    productValue: 3,
    basket : {
        tShirt : {
            total : 522,
            totalLast: 1051,
            quantity : 1,
            price : 522,
            priceLast : 1051,
            last : 2,
            use: true,
        },
        case : {
            total : 2100047,
            totalLast: 2300047,
            quantity : 200,
            price : 10500,
            priceLast : 11500,
            last: 'infinity',
            use: true,
        },
        pencils : {
            total : 494,
            totalLast: 950,
            quantity : 2,
            price : 247,
            priceLast : 475,
            last : 2,
            use: true,
        }
    }
}

function dateUpdate(){
    let totalSum = 0;
    let totalQuantity = 0;
    let tTotalLast = 0;

    for (const key in shop.basket) {
        if (typeof shop.basket[key] === 'object' && shop.basket[key].use) {
            totalSum += shop.basket[key].total;
            totalQuantity += shop.basket[key].quantity;
            tTotalLast += shop.basket[key].totalLast;
        }
    }

    if(shop.productValue == 0){
        document.getElementById('emp-id').style.display = 'flex'
    }

    shop.total = totalSum;
    
    document.getElementById('total-id').innerHTML = totalSum;
    getValueCheckboxWhenPayment();
    document.getElementById('total-product-id').innerHTML = totalQuantity;
    document.getElementById('total-without-dis-id').innerHTML = tTotalLast;
    document.getElementById('total-dis-id').innerHTML = tTotalLast - totalSum;
}

function butDateUpdate(minusId, valueId, plusId, product, relevanValueId, dis){
    valueId.innerHTML = shop.basket[product].quantity;
    shop.basket[product].total = shop.basket[product].price * shop.basket[product].quantity
    relevanValueId.innerHTML = shop.basket[product].total;

    shop.basket[product].totalLast = shop.basket[product].priceLast * shop.basket[product].quantity
    dis.innerHTML = shop.basket[product].totalLast;

    dateUpdate();
}

function minusBtn(product){
    const minusId = document.getElementById('minus-prod-' + product);
    const valueId = document.getElementById('prod-' + product);
    const plusId = document.getElementById('plus-prod-' + product);
    const relevanValueId = document.getElementById('relevant-value-id-' + product);
    const dis = document.getElementById('dis-id-' + product);

    if(shop.basket[product].quantity > 1){
        shop.basket[product].quantity = shop.basket[product].quantity - 1;
        butDateUpdate(minusId, valueId, plusId, product, relevanValueId, dis);
    }
    if(shop.basket[product].quantity == 1){
        minusId.style.color = 'rgba(0, 0, 0, 0.2)';
    }
    if(shop.basket[product].quantity < shop.basket[product].last){
        plusId.style.color = 'rgb(0, 0, 0)';
    }
}

function plusBtn(product){
    const minusId = document.getElementById('minus-prod-' + product);
    const valueId = document.getElementById('prod-' + product);
    const plusId = document.getElementById('plus-prod-' + product);
    const relevanValueId = document.getElementById('relevant-value-id-' + product);
    const dis = document.getElementById('dis-id-' + product);

    if(shop.basket[product].quantity < shop.basket[product].last || shop.basket[product].last == 'infinity'){
        shop.basket[product].quantity = shop.basket[product].quantity + 1;
        butDateUpdate(minusId, valueId, plusId, product, relevanValueId, dis);
    }
    if(shop.basket[product].quantity == shop.basket[product].last){
        plusId.style.color = 'rgba(0, 0, 0, 0.2)';
    }
    if(shop.basket[product].quantity > 1){
        minusId.style.color = 'rgb(0, 0, 0)';
    }
}

function removeProduct(id){
    document.getElementById(id + '-id').remove();

    shop.productValue -= 1;
    delete shop.basket[id];
    dateUpdate();

    document.getElementById('bask-val-id').innerHTML = shop.productValue;
    document.getElementById('bot-bask-val-id').innerHTML = shop.productValue;
}

// ---------------------
const valueCheckboxWhenPayment = document.getElementById('when-payment-id');
valueCheckboxWhenPayment.addEventListener("change", getValueCheckboxWhenPayment);

function getValueCheckboxWhenPayment(){
    if(valueCheckboxWhenPayment.checked == true){
        document.getElementById('when-payment-warning-id').style.display = 'none';
        document.getElementById('payment-button-id').innerHTML = 'Оплатить ' + shop.total + ' сом';
    }else if(valueCheckboxWhenPayment.checked == false){
        document.getElementById('when-payment-warning-id').style.display = '';
        document.getElementById('payment-button-id').innerHTML = 'Заказать';
    }
}

// -------------------

const selectCheckbox = document.getElementById('select-all-checkbox-id');
const contentThingCheckboxes = document.querySelectorAll('.content__thing-checkbox');

selectCheckbox.addEventListener('change', function () {
    const isChecked = selectCheckbox.checked;

    contentThingCheckboxes.forEach(function (checkbox) {
        checkbox.checked = isChecked;
    });

    if(selectCheckbox.checked == true){
        for (const key in shop.basket) {
            if (typeof shop.basket[key] === 'object') {
                shop.basket[key].use = true;
                console.log(shop.basket[key].use);
            }
        }
    }else{
        for (const key in shop.basket) {
            if (typeof shop.basket[key] === 'object') {
                shop.basket[key].use = false;
                console.log(shop.basket[key].use);
            }
        }
    }
    dateUpdate();
});

function handleCheckboxActivation(id) {
    const checkboxProd = document.getElementById('checkbox-' + id + '-id');
    if(checkboxProd.checked == true){
        shop.basket[id].use = true;
    }else{
        shop.basket[id].use = false;
    }
    dateUpdate();
}

// ---------------------
document.getElementById('modal-1__choose-id').addEventListener('click', function() {
    var selectedCard;
    var cards = document.getElementsByClassName('modal-1__card');
    for (var i = 0; i < cards.length; i++) {
        var radio = cards[i].querySelector('.modal-1__radio');
        if (radio.checked) {
            selectedCard = cards[i];
            break;
        }
    }
    if (selectedCard) {
        let card = selectedCard.getAttribute('inf');
        card = JSON.parse(card);
        document.getElementById('card-info-id').innerHTML = `
            <img src="${card.img}" class="content__card-image">
            <p class="content__card-number">${card.num}</p>
            <p class="content__card-date">01/30</p>
        `;
        document.getElementById('payment-pay-card-id').innerHTML = `
            <img src="${card.img}" class="content__card-image">
            <p class="content__card-number">${card.num}</p>
            <p class="content__card-date">01/30</p>
        `;
    }

    hiddenModalCard('modal-1-id');
});

document.getElementById('modal-2__but-id').addEventListener('click', function() {
    var selectedCard;
    var cards = document.getElementsByClassName('modal-2__adr');

    for (var i = 0; i < cards.length; i++) {
        var radio = cards[i].querySelector('.modal-2__radio');
        if (radio.checked) {
            selectedCard = cards[i];
            break;
        }
    }
    
    function pointCheck(point){
        if(point == 'p'){
            return `
            <div class="content__delivery-address-info" id="pick-up-point-address-id">
                <img src="/assets/img/star.png" class="content__delivery-address-star">
                <p class="content__delivery-address-rating">4.99</p>
                <p class="content__delivery-address-time">Ежедневно c 10 до 21</p>
            </div>
            `;
        }else{
            return '';
        }
    }
    
    if (selectedCard) {
        let card = selectedCard.getAttribute('inf');
        card = JSON.parse(card);
        document.getElementById('del-to-id').innerHTML = `
            <p class="content__delivery-address">${card.address}</p>
            ${
                pointCheck(card.point)
            }
        `;
        
        if(card.point == 'p'){
            document.getElementById('pick-up-point-id').innerHTML = 'Пункт выдачи';
        }else{
            document.getElementById('pick-up-point-id').innerHTML = 'Домашний адрес';
        }
    }

    hiddenModalCard('modal-2-id');
});