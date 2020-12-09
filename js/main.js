p1 = Math.floor(Math.random()*6 + 1);
p2 = Math.floor(Math.random()*6 + 1);
let win = 'Error';
if (p1 > p2) {
    win = 'Player 1 win!';
} else if (p1 < p2) {
    win = 'Player 2 win!';
} else {
    win = 'Draw';
};
document.getElementById('result').innerHTML = win
document.getElementById('imgp1').src = `img/${p1}.jpg`
document.getElementById('imgp2').src = `img/${p2}.jpg`