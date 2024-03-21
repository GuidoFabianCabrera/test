$(document).ready(function() {
  var numUsers = 100; // Número de usuarios simulados
  var interval = 100; // Intervalo de tiempo entre cada solicitud (en milisegundos)

  // Función para realizar la solicitud a la página
  function simulateUser() {
      $.ajax({
          url: 'tu_pagina.html', // URL de la página a la que quieres simular la carga masiva
          type: 'GET',
          success: function(response) {
              console.log('Solicitud exitosa');
          },
          error: function(xhr, status, error) {
              console.error('Error en la solicitud:', error);
          }
      });
  }

  // Función para simular múltiples usuarios
  function simulateMultipleUsers() {
      for (var i = 0; i < numUsers; i++) {
          setTimeout(simulateUser, i * interval); // Ejecutar cada solicitud con un intervalo de tiempo
      }
  }

  // Llamar a la función para simular múltiples usuarios
  simulateMultipleUsers();
});
