const url= "https://kea-alt-del.dk/t7/api/products/";



 
fetch (url)
.then((res) => res.json())
.then((data)=>showProduct(data));
 
function showProduct(product){
console.log(product);}
 
document.querySelector("#seasonwinter a").setAttribute("href","productlist.html?season=Winter");
 
document.querySelector("#seasonspring a").setAttribute("href","productlist.html?season=Spring");
 
document.querySelector("#seasonsummer a").setAttribute("href","productlist.html?season=Summer");
 
document.querySelector("#seasonautumn a").setAttribute("href","productlist.html?season=Fall");