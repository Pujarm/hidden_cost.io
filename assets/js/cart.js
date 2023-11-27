const product={
    id: 1,
    name: "Green Lantern",
    price: 100,
    img: "./assets/img/p1.jpg"
}
window.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("p-name").innerText=product.name;
    document.getElementById("p-price").innerText="Price: "+product.price;
    document.getElementById("p-name").innerText=product.name;
    document.getElementById("offer").innerText=10+product.price;
    document.getElementById("original").innerText=product.price;
    
})
function submit(){
    window.location.href="final.html"
}