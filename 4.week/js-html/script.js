// Add your code here

var baslik=document.getElementById("baslik")
var metin=document.getElementById("metin")

metin.innerHTML=baslik.innerHTML

var listeler=document.getElementsByTagName("ul")
var sehirler= listeler[0]

var SehirElemanlari= sehirler.getElementsByTagName("li")

for( i=0;i<SehirElemanlari.length;i++){
  //alert(SehirElemanlari[i].innerHTML)
}

var pragraflar= document.getElementsByClassName("a")

pragraflar[0].innerHTML="BAŞARI"
for(i=0;i<pragraflar.length;i++){
  pragraflar[i].innerHTML=pragraflar[i].innerHTML + ": "+i
}

//ilgili alanda değişiklik için kullanılır
var querySelector=document.querySelectorAll("h2.a")
querySelector[0].innerHTML="DEĞİŞTİ  " +querySelector[0].innerHTML

var querySelector1=document.querySelectorAll("h1#baslik")
querySelector1[0].innerHTML="DEĞİŞTİ  " +querySelector1[0].innerHTML

var inputErisim=document.getElementsByName("input")
//alert(inputErisim[0].value)

//id si başlık olan kısma tıklandığında yani h1 e 
baslik.addEventListener("click",rengideğiştir)  //click yerine mouseover yazarsak mouse ile üzerinden geçmek yeterli
function rengideğiştir(){
    pragraflar[0].style.color="red"
    inputErisim[0].value="Tıkladığında rengi değişti."
}

/////NODE EKLEMEK iki satırın arasına yeni bir yazı eklemek istediğimizde
var baslik1=document.createElement("h3")
var node=document.createTextNode("Merhaba ben Sude")
baslik1.appendChild(node)
var div=document.getElementById("div1")
var p2=document.getElementById("p2")
div1.insertBefore(baslik1,p2)
div1.removeChild(p3)

// p1 yerine h3 yazmak (h3 tekrar yazılmaz, p1 yerine geçer direkt)
var p2=document.getElementById("p2")
div1.replaceChild(baslik1,p1)