function changeBackgroundColor() {
    const colors = [
      '#f44336', // Rojo
      '#e91e63', // Rosa
      '#9c27b0', // Morado
      '#673ab7', // Azul Violeta
      '#3f51b5', // Azul
      '#2196f3', // Azul Claro
      '#03a9f4', // Cian
      '#00bcd4', // Turquesa
      '#009688', // Verde Agua
      '#4caf50'  // Verde
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  }

  setInterval(changeBackgroundColor, 4000); // Cambiar el color de fondo cada 4 segundos