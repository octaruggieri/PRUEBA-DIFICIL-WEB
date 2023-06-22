<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Obtener los valores de los parámetros de la URL
  $texto = $_GET['texto'];
  $fondo = $_GET['fondo'];
  $colorTexto = $_GET['colorTexto'];

  // Crear el contenido del archivo SVG
  $svgContent = '
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <rect width="100%" height="100%" fill="' . $fondo . '"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="' . $colorTexto . '">' . $texto . '</text>
  </svg>';

  // Configurar las cabeceras para descargar el archivo SVG
  header('Content-Type: image/svg+xml');
  header('Content-Disposition: attachment; filename="rectangulo.svg"');

  // Enviar el contenido del archivo SVG
  echo $svgContent;
}
?>

