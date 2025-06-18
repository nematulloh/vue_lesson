<script setup>
  import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Sklad</th>
        <th>kontragent</th>
        <th>Summa</th>
        <th>Vaqt</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.sklad.name}}</td>
        <td> <span v-if="item.kontragent">{{item.kontragent.name}}</span></td>
        <td>{{item.summa}}</td>
        <td>{{Dates(item.created_at)}}</td>
        <td>
          <button type="button" @click="Trash(item.id)">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>


</template>
<script>
  export default {
    data() {
      return {
        "som": 0,
        'data': [],
        "kurs": 12700,
        'valuta': 0,
        "error": false,
        "login": "",
        "parol": "",
        'error_message': "qale"
      }
    },
    mounted() {
      this.Data();
      setInterval(() => {
        this.error = false;
      }, 3000);
    },
    methods: {
      Dates(date) {
        var d = new Date(date * 1000);
        var dt = d.getDate();
        var month = d.getMonth() + 1;
        if (dt < 10) {
          dt = "0" + dt;
        }
        if (month < 10) {
          month = "0" + month;
        }
        var sec = d.getSeconds();
        if (sec < 10) {
          sec = "0" + sec;
        }
        var min = d.getMinutes();
        if (min < 10) {
          min = "0" + min;
        }
        var hour = d.getHours();
        if (hour < 10) {
          hour = "0" + hour;
        }
        return (
          dt +
          "-" +
          month +
          "-" +
          d.getFullYear() +
          " " +
          hour +
          ":" +
          min +
          ":" +
          sec
        );
    },
    Data() {
      let self = this;
      self.$axios({
        method: "get",
        url: "api/v1/prixod"
      }).then(function (response) {
        self.data = response.data;
      });
    },
    Trash(id) {
      let self = this;
      self.$axios({
        method: "delete",
        url: "api/v1/prixod/id/"+id
      }).then(function (response) {
        self.Data();
      });
    },
    Changevaluta() {
      this.valuta = this.som / this.kurs;
    },
    Send() {
      if (this.login == 'admin' && this.parol == '123456') {
        this.$router.push('/about');
      } else {
        this.error = true;
        this.error_message = 'login yoki parol notogri';
      }
    }
  }
  }
</script>