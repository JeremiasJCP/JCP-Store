function incrementarNumero() {
    const p = document.getElementById("numero-articulos--carrito");
    const numeroActual = p.textContent;
  
    if (numeroActual === null) {
      numeroActual = 0;
    }
  
    numeroActual = parseInt(numeroActual) + 1;
  
    p.textContent = numeroActual.toString();
  }
  