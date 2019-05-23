/* card の画像を保持するリスト: img_card
     0: down
     1,-2: number
    -1: joker

    s: 1:13, c: 14:26, h: 27:39, d: 40,52 
*/
var img_card = new Array(13*4);
var suit = ["s", "c", "h", "d"];
for (var i = 0; i < 4; i++){
    for(var k = 0; k < 13; k++){
        img_card[k + 13*i] = new Image();
        img_card[k + 13*i].src = "image/"+ suit[i] + (k + 1) + ".png";
        document.write(suit[i] + (k+ 13*i) + ", ");
    }
}

img_card.unshift(new Image());
img_card[0].src = "image/card.png";

img_card.push(new Image());
img_card[img_card.length - 1].src = "image/joker.png";

/* card の数字を保持するリスト: card
   index: 場所  value: 数字
*/
var card = new Array(13*4);
//for (var i = 0; i < card.length / 4; i++){
    /*
    card[i] = i + 1;
    card[i + 13] = i + 1;
    card[i + 13 + 13] = i + 1;
    card[i + 13 + 13 + 13] = i + 1;
    */
for (var i = 0; i < card.length; i++){
    card[i] = i+1;
}

// 数字を保持するリストをランダムにする
for (var i = 0; i < card.length; i++){
    var random = Math.floor(Math.random() * 11) % (13*4);
    var tmp = card[i];
    card[i] = card[random];
    card[random] = tmp;
}

card.unshift(0);
document.write(card);

/*
card state
0 : down
1 : up
2 : paired
*/
var state_card = new Array(13*4 + 1);
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
    } else if(card[first_card]%13 === card[second_card]%13){
        state_card[first_card] = 2;
        state_card[second_card] = 2;
        setTimeout(function() {
            document.getElementById("gazo" + first_card).src = img_card[img_card.length - 1].src;
            document.getElementById("gazo" + second_card).src = img_card[img_card.length - 1].src;        
            first_card = 0;
            second_card = 0;
          }, 1000);
    } else {
        state_card[first_card] = 0;
        state_card[second_card] = 0;
        setTimeout(function() {
            document.getElementById("gazo" + first_card).src = img_card[0].src;
            document.getElementById("gazo" + second_card).src = img_card[0].src;
            first_card = 0;
            second_card = 0;    
          }, 1000);
    }
}