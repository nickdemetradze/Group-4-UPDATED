let cartBtn = document.getElementById("cart-btn");
let cartPrice = document.getElementById("cart-price");

cartBtn.addEventListener('click', addToCart);


function addToCart(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function (){
        if(this.status == 200){
            cartBtn.innerHTML = this.responseText;
            cartBtn.style.background = '#56ce94';
            cartPrice.style.background = '#56ce94';
        }
    }

    xhr.send();
}

