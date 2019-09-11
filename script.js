var state = 0;
var states = [0,1,2,3,4,5];
var reader = document.getElementById('reader');
reader.innerHTML = '';

function post(h1,p1) {
    //Clear the div
    reader.innerHTML = '';

    let newH1 = document.createElement('h1');
    newH1.textContent = h1;
    reader.appendChild(newH1);

    if (p1.length > 0) {
        let newP = document.createElement('p');
        newP.textContent = p1;
        reader.appendChild(newP);
    }

    let newButton = document.createElement('button');
    newButton.addEventListener("click", checkState);

    let newResetButton = document.createElement('button');


}

function checkState() {
    if (state = 0) {
        page0();
    }
}

function page0() {
    h1 = "I can read your mind.";
    state = 1;
    post(h1);
}

//page0();