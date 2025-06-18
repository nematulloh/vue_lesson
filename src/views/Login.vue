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
      <v-select v-model="sklad_id" :options="sklad_list" label="name" :reduce="option => option.id"
        @update:modelValue="Userlists" />
      <label for="" class="form-label">login</label>
      <v-select v-model="login" :options="user_list" label="username" :reduce="option => option.username" />
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
        'sklad_id': 1,
        "sklad_list": [
          { name: "Sklad1", id: 1 },
          { name: "Sklad2", id: 2 },
          { name: "Sklad3", id: 3 },
        ],
        "user_list": [
          { username: "admin", id: 1, passwor: '123', sklad_id: 1 },
          { username: "user2", id: 2, passwor: '1223', sklad_id: 2 },
          { username: "user3", id: 3, passwor: '123w', sklad_id: 3 },
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
      this.Userlists();
      this.$axios.get('/api/v1/sklads/skladnames')
        .then(response => {
          this.sklad_list = response.data;
          // console.log(response.data)
        }).catch(error => {
          if (error.response) {
            console.error('Xato javob:', error.response.data);
          } else if (error.request) {
            console.error('Serverdan javob kelmadi:', error.request);
          } else {
            console.error('So‘rov xatosi:', error.message);
          }
        })
    },
    computed: {
      // filteruser() {
      //   let self=this;
      //   return this.user_list.filter(row => {
      //     if (row.sklad_id == self.sklad_id) {
      //         return row;
      //     }
      //   });
      // }
    },
    methods: {
      Test() {
        console.log('ishladi');
      },
      Userlists() {
        let self = this;
        this.$axios.get("api/v1/users/usernames/" + self.sklad_id)
          .then(function (response) {
            self.user_list = response.data;
          }).catch(error => {
          if (error.response) {
            console.error('Xato javob:', error.response.data);
          } else if (error.request) {
            console.error('Serverdan javob kelmadi:', error.request);
          } else {
            console.error('So‘rov xatosi:', error.message);
          }
        });
      },
      Send() {
        let self = this;
        self.$axios({
          method: "post",
          url: "api/v1/users/login",
          data: {
            sklad_id: self.sklad_id,
            username: self.login,
            password: self.parol,
            confirm_password: self.parol
          }
        }).then(function (response) {
          localStorage.setItem("token", response.data.token);
          self.$router.push({ name: "home" });
        }).catch(error => {
          if (error.response) {
            console.error('Xato javob:', error.response.data);
          } else if (error.request) {
            console.error('Serverdan javob kelmadi:', error.request);
          } else {
            console.error('So‘rov xatosi:', error.message);
          }
        });
      }
    }
  }
</script>