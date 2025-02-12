
const drawings = document.querySelectorAll(".drawing");
drawings.forEach((drawing) => {
  drawing.addEventListener('click', () => {
    if (drawing.classList.contains('active')) {
      return drawing.classList.remove('active');
    }
    drawings.forEach((drawing) => {
      drawing.classList.remove('active');
    });
    drawing.classList.add('active');
})});

