fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => fillProducts(products));

function fillProducts(_productos){
    document.getElementById("imgProducto1").src=_productos[Math.floor(Math.random() *20)].image
    document.getElementById("imgProducto2").src=_productos[Math.floor(Math.random() *20)].image
    document.getElementById("imgProducto3").src=_productos[Math.floor(Math.random() *20)].image
    document.getElementById("imgProducto4").src=_productos[Math.floor(Math.random() *20)].image
    document.getElementById("imgProducto5").src=_productos[Math.floor(Math.random() *20)].image
    document.getElementById("imgProducto6").src=_productos[Math.floor(Math.random() *20)].image

    //console.log(_productos)
}