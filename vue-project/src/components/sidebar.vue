<template>
    <div class="sidebar">
        <h2> Barra Lateral</h2>
        <ul> 
        <li><router-link to ="/contador">Contador </router-link></li>
        <li><router-link to ="/Lista-de-tareas">Lista de tareas</router-link></li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style>
.sidebar{
width: 200px;    
background-color: rgb(233, 233, 238);
padding:20px;
}
</style>