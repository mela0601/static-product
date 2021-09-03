
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url= "https://kea-alt-del.dk/t7/api/products/" + id;


 
fetch (url)
.then((res) => res.json())
.then((data)=>showProduct(data));
 
function showProduct(product){
console.log(product);
 
document.querySelector("#seasonol a").textContent=product.season;
document.querySelector("#seasonol a").setAttribute("href","productlist.html?season=" + product.season);
document.querySelector(".brandname").textContent=product.brandname;

document.querySelector(".smallinfo").textContent=`${product.brandname} | ${product.category}`;

 
document.querySelector("#productnameol").textContent=product.productdisplayname;
document.querySelector("h3").textContent=product.productdisplayname;
document.querySelector(".productname").textContent=product.productdisplayname;

 
document.querySelector(".idnumber").textContent=product.id;
 
document.querySelector("#color").textContent=product.color1;
 
document.querySelector("#brandbio").textContent=product.brandbio;



 
document.querySelector(".productimage").src=`https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
 
document.querySelector(".productimage").alt=product.displayname;
 
}