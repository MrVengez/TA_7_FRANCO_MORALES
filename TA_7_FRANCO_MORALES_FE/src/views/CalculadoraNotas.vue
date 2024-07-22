<template>
    <div class="container">
      <h2>Cálculo de calificaciones</h2>
      <form @submit.prevent="calcularNota">
        <div class="form-group">
          <label for="nota1">Nota 1 (10-70):</label>
          <input type="number" id="nota1" v-model.number="nota1" class="form-control" min="10" max="70" required>
        </div>
        <div class="form-group">
          <label for="nota2">Nota 2 (10-70):</label>
          <input type="number" id="nota2" v-model.number="nota2" class="form-control" min="10" max="70" required>
        </div>
        <div class="form-group">
          <label for="nota3">Nota 3 (10-70):</label>
          <input type="number" id="nota3" v-model.number="nota3" class="form-control" min="10" max="70" required>
        </div>
        <div class="form-group">
          <label for="asistencia">Asistencia (0-100):</label>
          <input type="number" id="asistencia" v-model.number="asistencia" class="form-control" min="0" max="100" required>
        </div>
        <button type="submit" class="btn btn-primary">Calcular</button>
      </form>
  
      <div v-if="mostrarResultado">
        <h3>Resultado:</h3>
        <p v-if="aprobado">¡Aprobado! Promedio ponderado: {{ promedioPonderado.toFixed(2) }}</p>
        <p v-else>Reprobado</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nota1: null,
        nota2: null,
        nota3: null,
        asistencia: null,
        mostrarResultado: false,
        aprobado: false,
        promedioPonderado: 0
      };
    },

    
    methods: {
      calcularNota() {
        
        if (this.nota1 === null || this.nota2 === null || this.nota3 === null || this.asistencia === null) {
          alert('Por favor complete todos los campos.');
          return;
        }
  
        
        const n1 = parseFloat(this.nota1);
        const n2 = parseFloat(this.nota2);
        const n3 = parseFloat(this.nota3);
        const asistencia = parseFloat(this.asistencia);
  
        
        if (n1 < 10 || n1 > 70 || n2 < 10 || n2 > 70 || n3 < 10 || n3 > 70 || asistencia < 0 || asistencia > 100) {
          alert('Los valores deben estar dentro de los rangos especificados.');
          return;
        }
  
        
        this.promedioPonderado = (n1 * 0.35 + n2 * 0.35 + n3 * 0.3);
  
        
        if (this.promedioPonderado >= 40 && asistencia >= 80) {
          this.aprobado = true;
        } else {
          this.aprobado = false;
        }
  
        
        this.mostrarResultado = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .error-message {
    color: red;
  }
  </style>
  
