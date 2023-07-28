/* Función para texto de icono de menú hamburguesa */

const button = document.getElementById("menuH");
const textShow = document.getElementById("textShow");

button.addEventListener("click", (event) => {
    var elementTag = document.createElement("p");
      var textElement = document.createTextNode("Somos Nuestras APPS");
      elementTag.appendChild(textElement);
      var flag = textShow.classList.contains( 'open' );
      console.log(flag)
      if (flag==true){
        textShow.classList.remove("open");
        document.getElementById('textShow').innerHTML = '';
      }
      else{
        textShow.appendChild(elementTag);
        textShow.classList.add("open")
      }
      
});