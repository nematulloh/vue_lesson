<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  
  <form>
    <label for="">som</label>
    <input type="text" @input="Changevaluta()" v-model="som" name="" id="">
    <label for="">kurs</label>
    {{kurs}}
    <label for="">$</label>
    <input type="text" name="" id="" v-model="valuta">
  </form>
  <!-- <main> -->
    <!-- <TheWelcome /> -->

  <!-- </main> -->
</template>
<script>
  export default{
    data(){
      return {
        "som":0,
        "kurs":12700,
        'valuta':0,
        "error":false,
        "login":"",
        "parol":"",
        'error_message':"qale"
      }
    },
    mounted(){
      setInterval(() => {
        this.error=false;
      }, 3000);
    },
    methods:{
      Changevaluta(){
        this.valuta=this.som/this.kurs;
      },
      Send(){
        if(this.login=='admin' && this.parol=='123456'){
          this.$router.push('/about');
        }else{
          this.error=true;
          this.error_message='login yoki parol notogri';
        }
      }
    }
  }
</script>
