const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?season="+ season;
 
fetch(url)
.then(function(res){
    return res.json();
})
.then(function (data){
    handleProductList(data);
});
 
function handleProductList(data) {
// console.log(data);
data.forEach(showProduct);

}
 
function showProduct(product) {

    // grab template
const template = document.querySelector("#smallProductTemplate").content;

    // clone it
const copy = template.cloneNode(true);

    // change 
copy.querySelector("a").setAttribute("href","product.html?id=" + product.id);
copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
copy.querySelector("h3").textContent = `${product.productdisplayname}`;
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
copy.querySelector(".percentage").textContent = `-${product.discount}%`;
copy.querySelector(".price").textContent = `DKK ${product.price},-`;
copy.querySelector(".newprice").textContent = `Now DKK ${product.price},-`;
document.querySelector("#pageseason").textContent = season;

const discountamount = product.discount / 100 * product.price;
const newpricenoround =  product.price - discountamount;
const newprice =  Math.round(newpricenoround);

if(product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
}

if(product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".price").classList.add("scratch");
    copy.querySelector(".newprice").textContent = `DKK ${newprice},-`;
}


    // parent
const parent = document.querySelector("main");

    // append
    parent.appendChild(copy);



}
