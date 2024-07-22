<template>
    <div id="app">
      <div class="header">
        <h1>Mi Aplicación</h1>
        <div class="navigation">
          <router-link to="/CalculadoraNotas" class="nav-link">Calculadora Notas</router-link> |
          <router-link to="/ValidacionUsuario" class="nav-link">Validacion de Usuario</router-link>
        </div>
      </div>
  
      <div class="main-content">
        <router-view />
      </div>
  
      <div class="footer">
        
      </div>
    </div>
  </template>
  
  <style>
  #app {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .navigation {
    background-color: #f0f0f0;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    padding: 5px 10px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #ddd;
  }
  
  .main-content {
    margin-bottom: 20px;
  }
  
  </style>