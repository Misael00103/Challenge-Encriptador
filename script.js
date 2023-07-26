
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])            
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])            
        }
    }
    return stringDesencriptado;
}



function copiarTexto() {
    // Get the text field
    var copyText = document.getElementById("text-area");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
  }

  var Loading = (loadingDelayHidden = 1000) => {
    let loading = null;
    const myLoadingDelayHidden = loadingDelayHidden;
    let imgs = [];
    let lenImgs = 0;
    let counterImgsLoading = 1;

    function incrementCounterImgs() {
      counterImgsLoading += 1;
      if (counterImgsLoading === lenImgs) {
        hideLoading();
      }
    }

    function hideLoading() {
      if (loading !== null) {
        loading.classList.remove("show");
        setTimeout(function () {
          loading.remove();
        }, myLoadingDelayHidden);
      }
    }

    function init() {
      document.addEventListener("DOMContentLoaded", function () {
        loading = document.querySelector(".loading");
        imgs = Array.from(document.images);
        lenImgs = imgs.length;
        if (imgs.length === 0) {
          hideLoading();
        } else {
          imgs.forEach(function (img) {
            img.addEventListener("load", incrementCounterImgs, false);
          });
        }
        setTimeout(function () {
          hideLoading();
        }, myLoadingDelayHidden);
      });
    }

    return { init: init };
  };

  Loading(1000).init();

  const copyButton = document.getElementById('copy-button');
const checkIcon = document.getElementById('check-icon');

copyButton.addEventListener('click', () => {
  var copyText = document.getElementById("textArea");// replace with your own text to copy
  navigator.clipboard.writeText(textToCopy);
  
  // show check icon and hide it after 2 seconds
  checkIcon.style.visibility = 'visible';
  checkIcon.style.opacity = '1';
  setTimeout(() => {
    checkIcon.style.visibility = 'hidden';
    checkIcon.style.opacity = '0';
  }, 2000);
});

