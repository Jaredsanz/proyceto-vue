import { defineStore } from "pinia"
import { ref } from "vue"

export const useregistrarStore = defineStore('registrar', () => {
    const nombre = ref('')
    const email =  ref('') 
    const guardarRegistro = (nombreFormulario, emailFormulario) => {
        nombre.value = nombreFormulario
        email.value = emailFormulario

    } 
    return {nombre, email, guardarRegistro}
})