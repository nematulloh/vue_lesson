<template>
    <div class="w-64 h-screen bg-gray-800 text-white fixed">
      <div class="p-4 text-xl font-bold border-b border-gray-700">My App</div>
      <nav class="mt-4">
        <ul>
          <li class="px-4 py-2 hover:bg-gray-700"><router-link to="/">🏠 Home</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-700"><router-link to="/about">ℹ️ About</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-700"><router-link to="/contact">📞 Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  }
  </script>
  