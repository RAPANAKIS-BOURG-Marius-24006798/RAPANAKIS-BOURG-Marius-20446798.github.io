
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

const drawings2 = document.querySelectorAll(".drawing");
const body = document.querySelector('body');
drawings2.forEach((drawing) => {
  drawing.addEventListener('mouseenter', () => {
    if (drawing.classList.contains('active')) {
      drawing.classList.add('clear-image');
      body.classList.add('blur-background');
    }
  })

  drawing.addEventListener('mouseleave', () => {
    if (body.classList.contains('blur-background') || !drawing.classList.contains('active')) {
      drawing.classList.remove('clear-image');
      body.classList.remove('blur-background');
    }
  })
});
