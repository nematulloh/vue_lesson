<template>
    <div class="d-flex">
      <div class="bg-dark text-white p-3 vh-100" style="width: 250px;">
        <h4>BDM</h4>
        <ul class="nav flex-column mt-4">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">🏠 Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">ℹ️ About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
  
      <div class="flex-grow-1 p-4">
        <router-view />
      </div>
    </div>
  </template>
  