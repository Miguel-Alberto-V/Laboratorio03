function Convertor() {
    // Obtener los valores seleccionados y la cantidad ingresada
    const entrada = document.getElementById("mEntrada").value;
    const salida = document.getElementById("mSalida").value;
    const amount = parseFloat(document.getElementById("amount").value);
  
    // Definir los tipos de cambio
    const exchangeRate = {
      USD: {
        PEN: 4.00,
        EUR: 0.83
      },
      PEN: {
        USD: 0.25,
        EUR: 0.21
      },
      EUR: {
        USD: 1.20,
        PEN: 4.70
      }
    };
  
    // Calcular el total a recibir
    const rate = exchangeRate[entrada][salida];
    const total = amount * rate;
  
    // Mostrar el resultado en una alerta
    alert(`Total a recibir: ${total.toFixed(2)} ${salida}`);
  }