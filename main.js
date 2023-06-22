function cambiarFondo() {
  var selectFondo = document.getElementById('fondo');
  var rectangulo = document.getElementById('rectangulo');
  var fondoSeleccionado = selectFondo.options[selectFondo.selectedIndex].value;

  rectangulo.style.backgroundImage = fondoSeleccionado !== "" ? "url('" + fondoSeleccionado + "')" : "none";
}

document.getElementById('tipografia').addEventListener('change', function() {
  var texto = document.getElementById('texto');
  texto.style.fontFamily = this.value;
});

function cambiarTamañoTexto() {
  var tamañoTexto = document.getElementById('tamañoTexto').value;
  var texto = document.getElementById('texto');
  texto.style.fontSize = tamañoTexto + 'px';
}

function cambiarColorTexto() {
  var colorTexto = document.getElementById('colorTexto').value;
  var texto = document.getElementById('texto');
  texto.style.color = colorTexto;
}

function generarArchivoPS() {
  var rectangulo = document.getElementById('rectangulo');
  var rectanguloEstilo = window.getComputedStyle(rectangulo);
  var rectanguloAncho = rectangulo.offsetWidth;
  var rectanguloAlto = rectangulo.offsetHeight;
  var rectanguloHTML = rectangulo.innerHTML;

  var psContent = `
    %!PS
    /Courier findfont
    12 scalefont
    setfont
    ${rectanguloAncho} ${rectanguloAlto} translate
    ${rectanguloAncho} ${rectanguloAlto} scale
    ${rectanguloAncho / 2} ${rectanguloAlto / 2} moveto
    (${rectanguloHTML}) show
    showpage
  `;

  var psBlob = new Blob([psContent], { type: "application/postscript" });
  var psUrl = URL.createObjectURL(psBlob);

  var downloadLink = document.createElement('a');
  downloadLink.href = psUrl;
  downloadLink.download = 'rectangulo.ps';
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
