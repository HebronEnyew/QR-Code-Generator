
//Counter Program

    /*const counterLabel = document.getElementById('countLabel');
    const decreaseBotton = document.getElementById('decreaseBtn');
    const resetBotton = document.getElementById('resetBtn');
    const increaseBotton = document.getElementById('increaseBtn');
    let count = 0;

    increaseBotton.onclick = function() {
        count++;
        counterLabel.textContent = count;
    }

    resetBotton.onclick = function() {
        count = 0;
        counterLabel.textContent = count;
    }

    decreaseBotton.onclick = function() {
        count--;
        counterLabel.textContent = count;
    }}*/

    
/*const wrapper = document.querySelector(".wrapper"),
        qrInput = document.querySelector(".form input"),
        generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    wrapper.classList.add("active");
});*/

const wrapper = document.querySelector(".wrapper"),
      qrInput = document.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImage = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code....";
    qrImage.classList.add("active");
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
        qrImage.classList.remove("active");
    }
})