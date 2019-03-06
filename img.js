var img_card = new Array(4);
for(var i = 0; i <= 3; i++){
    img_card[i] = new Image();
    img_card[i].src = "image/s" + (i + 1) + ".png";
}

img_card.unshift(new Image());
img_card[0].src = "image/card.png";

img_card.push(new Image());
img_card[img_card.length - 1].src = "image/joker.png";

var card = new Array(8);
for (var i = 0; i < card.length / 2; i++){
    card[i] = i + 1;
    card[i + 4] = i + 1;
}

for (var i = 0; i < card.length; i++){
    var random = Math.floor(Math.random() * 11) % 8;
    var tmp = card[i];
    card[i] = card[random];
    card[random] = tmp;
}

card.unshift(0);
document.write(card)

/*
card state
0 : down
1 : up
2 : paired
*/
var state_card = new Array(9);
state_card.fill(0);

var first_card = 0;
var second_card = 0;
function select_card(n){
    if (first_card === 0 && state_card[n] === 0){
        first_card = n;
        state_card[n] = 1;
        change_img(n);
    } else if (second_card === 0 && state_card[n] === 0 && first_card !== n){
        second_card = n;
        state_card[n] = 1;
        change_img(n);
    }
    check_pair();
}

function change_img(n){
    document.getElementById("gazo" + n).src=img_card[card[n]].src;
}

function check_pair(){
    if(card[first_card] === 0 || card[second_card] === 0){
        return;
    } else if(card[first_card] === card[second_card]){
        state_card[first_card] = 2;
        state_card[second_card] = 2;
        document.getElementById("gazo" + first_card).src = img_card[img_card.length - 1].src;
        document.getElementById("gazo" + second_card).src = img_card[img_card.length - 1].src;        
    } else {

        state_card[first_card] = 0;
        state_card[second_card] = 0;
        document.getElementById("gazo" + first_card).src = img_card[0].src;
        document.getElementById("gazo" + second_card).src = img_card[0].src;
    }
    first_card = 0;
    second_card = 0;    
}



