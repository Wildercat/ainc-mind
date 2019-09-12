var state = 0;
var states = [0,1,2,3,4,5];
var reader = document.getElementById('reader');

function post(h1,bText,p1, symbBoolean, symb) {
    //Clear the div
    reader.innerHTML = '';

    let newH1 = document.createElement('h1');
    newH1.textContent = h1;
    if (symbBoolean){
        newH1.appendChild(symb);
    }
    reader.appendChild(newH1);
    
    let newButton = document.createElement('button');
    newButton.textContent = bText;
    newButton.addEventListener('click', checkState);
    reader.appendChild(newButton);

    let newP = document.createElement('p');
    newP.textContent = p1;
    reader.appendChild(newP);
    
    let newResetButton = document.createElement('button');
    newResetButton.textContent = 'Reset';
    newResetButton.addEventListener('click', page0);
    reader.appendChild(newResetButton);
    
    
}

function checkState() {
    if (state == 0) {
        page0();
    } else if (state == 1) {
        page1();
    } else if (state == 2) {
        page2();
    } else if (state == 3) {
        page3();
    } else if (state == 4) {
        page4();
    } else if (state == 5) {
        page5();
    } else if (state == 6) {
        page0();
    }
}

function page0() {
    let h1 = 'I can read your mind.';
    let bText = 'Begin';
    state = 1;
    post(h1,bText,'',false,'');
}

function page1() {
    let h1 = 'Pick a number between 1 - 99.'
    let bText = 'Next';
    let p1 = 'When you have your number, click next.';
    state++;
    post(h1,bText,p1,false,'');
}

function page2() {
    let h1 = 'Add both digits together to get a new number';
    let bText = 'Next';
    let p1 = 'Ex: 14 is 1 + 4 = 5';
    state++;
    post(h1,bText,p1,false,'');
}

function page3() {
    let h1 = 'Subtract your new number from your original number';
    let bText = 'Next';
    let p1 = 'Ex: 14 - 5 = 9';
    state++
    post(h1,bText,p1,false,'');
}

function page4() {
    //make a list of numbers 1-100
    var numList = [];
    for (let i = 1; i <= 100; i++) {
        numList.push(i);
    }
    //print out the numbers with random symbols attached to them
    //wow I should have done this with the ordered list tag
    var uList = document.createElement('ul');
    for (let i = 0; i < 100; i++) {
        if (numList[i] % 9 == 0) {
            let li9 = document.createElement('li');
            li9.textContent = numList[i] + ': &';
            uList.appendChild(li9);
        } else {
            let li = document.createElement('li');
            li.textContent = numList[i] + ': ' + rSymbol();
            uList.appendChild(li);
        }
    }
    

    let h1 = 'NUMBERLIST';
    let bText = 'Reveal';
    let p1 = 'Find your new number. Note the symbol beside the number.';
    state++
    post(h1,bText,p1,true,uList);     
}

function page5() {
    let h1 = '&';
    let bText = 'Reset';
    let p1 = 'Was this your symbol?';
    state++
    post(h1,bText,p1);
}

//returns a random symbol
function rSymbol() {
    let symbolList = ['!','@','#','$','%','^','*','+'];
    return symbolList[Math.floor(Math.random() * symbolList.length)];
}


page0();