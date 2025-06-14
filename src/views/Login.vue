<template>
  <span class="errormessage" v-if="error">
    {{error_message}}
  </span>
  <span v-else>
    xatolik yoq
  </span>
  <div class="logindiv">
    <form>
      <h3>
        Biznes dasturlash markazi
      </h3>
      <label for="" class="form-label">Sklad</label>
      <v-select v-model="sklad_id" :options="sklad_list" label="name" :reduce="option => option.id" />
      <label for="" class="form-label">login</label>
            <v-select v-model="login" :options="filteruser" label="name" :reduce="option => option.name" />
      <label for="" class="form-label">parol</label>
      <input type="password" class="form-control" name="" id="" v-model="parol">
      <br>
      <button type="button" class="btn btn-primary" @click="Send()">Send</button>
    </form>
  </div>
  <!-- <main> -->
  <!-- <TheWelcome /> -->

  <!-- </main> -->
</template>
<script>
  //         import VSelect from "vue3-select";
  // import "vue3-select/dist/vue3-select.css";
  export default {
    // components: { VSelect },
    data() {
      return {
        "selected": null,
        'sklad_id':1,
        "sklad_list": [
          { name: "Sklad1", id: 1 },
          { name: "Sklad2", id: 2 },
          { name: "Sklad3", id: 3 },
        ],
        "user_list": [
          { name: "admin", id: 1, passwor: '123',sklad_id:1 },
          { name: "user2", id: 2, passwor: '1223',sklad_id:2 },
          { name: "user3", id: 3, passwor: '123w',sklad_id:3 },
        ],

        "error": false,
        "login": "",
        "parol": "",
        'error_message': ""
      }
    },
    mounted() {
      setInterval(() => {
        this.error = false;
      }, 5000);
      this.$axios.get('http://185.76.13.223:3084/api/v1/sklads/skladnames')
        .then(response => {
          this.sklad_list=response.data;
          // console.log(response.data)
        });
    },
    computed: {
      filteruser() {
        let self=this;
        return this.user_list.filter(row => {
          if (row.sklad_id == self.sklad_id) {
              return row;
          }
        });
      }
    },
    methods: {
      Send() {

        if (this.login == 'admin' && this.parol == '123456') {
          this.$router.push('/');
        } else {
          this.error = true;
          this.error_message = 'login yoki parol notogri';
        }
      }
    }
  }
</script>