const treeNumber = document.querySelector('.treeNumber');
const buyButton = document.querySelector('.buyButton');

const oneD = document.querySelector('input[id=choose1][type=radio]');
const fiveD = document.querySelector('input[id=choose2][type=radio]');
const tenD = document.querySelector('input[id=choose3][type=radio]');
const twentyD = document.querySelector('input[id=choose4][type=radio]');

let powM2 = document.querySelector('.powM22');
let powCO2 = document.querySelector('.powCO2');
let powTrees = document.querySelector('.powTrees');
let powOx = document.querySelector('.powOx');
let powPaper = document.querySelector('.powPaper2');

class Stats {
    constructor(powM2, powCO2, powTrees, powOx, powPaper) {
        this.powM2 = Number(powM2.innerHTML);
        this.powCO2 = Number(powCO2.innerHTML);
        this.powTrees = Number(powTrees.innerHTML);
        this.powOx = Number(powOx.innerHTML);
        this.powPaper = Number(powPaper.innerHTML);
    }
}

let stats = localStorage.getItem('stats');

if (stats === null) {
    stats = new Stats(powM2, powCO2, powTrees, powOx, powPaper);
} else {
    stats = JSON.parse(stats);
}

function run(int) {
    document.querySelector('.powM22').innerHTML = stats.powM2 += 0.5 * int;
    document.querySelector('.powCO2').innerHTML = stats.powCO2 += 6 * int;
    document.querySelector('.powTrees').innerHTML = stats.powTrees += int;
    document.querySelector('.powOx').innerHTML = stats.powOx += 10 * int;
    document.querySelector('.powPaper2').innerHTML = stats.powPaper += 60 * int;
}

function saveInfo() {
    localStorage.setItem('stats', JSON.stringify(stats));
}

function showInfo() {
    const {powM2, powCO2, powTrees, powOx, powPaper} = stats;
    document.querySelector('.powM22').innerHTML = powM2;
    document.querySelector('.powCO2').innerHTML = powCO2;
    document.querySelector('.powTrees').innerHTML = powTrees;
    document.querySelector('.powOx').innerHTML = powOx;
    document.querySelector('.powPaper2').innerHTML = powPaper;
}

showInfo();

treeNumber.addEventListener('click', () => {
    const radio = document.querySelector('input[type=radio][name=trees]:checked');
    if (radio.checked === true) {
        radio.checked = false;
    }
});

buyButton.addEventListener('click', () => {
    const treeNumberR = Number(document.querySelector('.treeNumber').value);

    if (oneD.checked === true) {
        run(1);
    }
    else if (fiveD.checked === true) {
        run(5);
    }
    else if (tenD.checked === true) {
        run(10);
    }
    else if (twentyD.checked === true) {
        run(20);
    }
    else {
        run(treeNumberR);
    }
    saveInfo();
});