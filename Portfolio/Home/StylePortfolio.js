// Seleziona tutti i link nella pagina
const links = document.querySelectorAll('a');

// Aggiungi gli eventi per ogni link
links.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    link.style.color = 'black'; // Colore nero quando il mouse passa sopra il link
  });

  link.addEventListener('mouseout', function() {
    link.style.color = 'gray'; // Torna al colore grigio quando il mouse esce
  });
});
