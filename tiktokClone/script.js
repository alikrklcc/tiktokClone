let qr1=document.getElementById("qr1");
let qrPage=document.querySelector(".qr1Page");


qr1.addEventListener("click", ()=>{

qrPage.style.display="flex";
qrPage.style.opacity="0.5"

qrPage.addEventListener("click", ()=>{


    qrPage.style.display="none";
})

})




