document.addEventListener("DOMContentLoaded", function(){

    let flip = document.getElementById('flip');
    let crypto = document.getElementById('crypto');
    let cryptogramme = document.getElementById('cryptogramme');
    let cardnumber = document.getElementById('numbercard');
    let card = document.getElementById('numb-card');
    let name = document.getElementById('name');
    let namecard = document.getElementById('namecard');
    let date = document.getElementById('date');
    let datecard = document.getElementById('datecard');

    crypto.onfocus = function(){
        flip.style.transform = "rotateY(180deg)";
    }
    crypto.onblur = function(){
        flip.style.transform = "rotateY(0deg)"
    }
    card.addEventListener('keyup', function(){
        cardnumber.innerHTML = card.value;
        if(card.value.length === 0){
            cardnumber.innerHTML = '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;';
        }
        if (card.value.length === 4 || card.value.length === 9 || card.value.length === 14){
            card.value += " ";
            
        }
    })
    name.addEventListener('keyup', function(){
        namecard.innerHTML = name.value;
        if (name.value.length === 0){
            namecard.innerHTML = 'FULL NAME';
        }
    })
    date.addEventListener('keyup', function(){
        datecard.innerHTML = date.value;
        if (date.value.length === 0){
            datecard.innerHTML = 'MM/YY';
        }
        if(date.value.length === 2){
            date.value += "/";
        }
    })
    crypto.addEventListener('keyup', function(){
        cryptogramme.innerHTML = crypto.value;
        if (crypto.value.length === 0){
            cryptogramme.innerHTML = "&bull;&bull;&bull;";
        }
    })
})





