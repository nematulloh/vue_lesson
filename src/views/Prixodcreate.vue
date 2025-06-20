<script setup>
  import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <label for="" class="form-label">Sklad</label>
        <v-select v-model="datas.sklad_id" :options="sklad_list" label="name" :reduce="option => option.id" />
        <label for="" class="form-label">Kontragent</label>
        <v-select v-model="datas.kontragent_id" :options="kontragent_list" label="name" :reduce="option => option.id" />
        <label for="" class="form-label">qarzdorlik</label>
        <div style="text-align:end!important;">{{datas.current_total_dollar}} <span
            style="color:green;padding-right: 5px;">$</span>|| <span
            style="padding-left: 5px;">{{datas.current_total}}</span></div>
        <label for="" class="form-label">tolov turi</label>
        <v-select v-model="datas.pay_type_id" :options="pay_type_list" label="name" :reduce="option => option.id" />
        <label for="" class="form-label">Summa</label>
        <input type="number" v-model="datas.summa" class="form-input" />
        <label for="" class="form-label">Tolov vaqti</label>
        <!-- <input type="date" v-model=""pay_date"" @change="Changetime()"> -->
      </div>
      <div class="col-md-6">
        kassa
        <label for="" class="form-label">tolov turi</label>
        <v-select v-model="datas.pay_type_kassa" :options="pay_type_list" label="name" :reduce="option => option.id"   @update:modelValue="Changepaytypekassa()" />
          <label for="" class="form-label">Summa</label>
        <input type="number" v-model="datas.kassa_summa" class="form-input" @input="Changepaytypekassa()" />
        <br>
        <label for="" class="form-label">kurs</label>
        <input v-model="datas.dollar_rate" type="number">
      </div>
    </div>
    <button type="button" @click="Send()">save</button>

    
  </form>


</template>
<script>
  export default {
    data() {
      return {
        "pay_date": 0,
        'sklad_list': [],
        'pay_type_list': [],
        "kontragent_list": [],
        'datas': {
          datetime: new Date().valueOf().toString().slice(0, 10),
          sklad_id: 1,
          kontragent_id: null,
          user_id: 1,
          current_total: 0,
          summa: 0,
          pay_type_id: 1,
          current_total_dollar: 0,
          dollar_rate: 0,
          pay_type_kassa: 1,
          kassa_summa: 0,
          type: true,
          dollar_summa: 0,
          cash_summa: 0,
          qaytim_dollar: 0,
          qaytim_som: 0,
          shot_summa: 0,
          plastic_summa: 0,
          comment: ""
        },
        "som": 0,
        'data': [],
        "kurs": 12700,
        'dollar_rate':12500,
        'valuta': 0,
        "error": false,
        "login": "",
        "parol": "",
        'error_message': "qale"
      }
    },
    mounted() {
    },
    created() {
      this.Data();
      this.Paytypelist();
      this.Kontragentlist();
      this.Skladlist();
      this.Dollarrate();
    },
    methods: {
      Send() {
        let self = this;
        self.$axios({
          method: 'post',
          url: 'api/v1/kontragent-pay',
          data: self.datas
        }).then(function (response) {
          self.$router.push({ name: "about" });
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
      Changetime() {
        let self = this;
        if (self.datas.kontragent_id > 0) {
          var date = new Date(self.pay_date).valueOf().toString().slice(0, 10);
          self.$axios
            .get("api/v1/kontragent/update/payment/id/" + self.datas.kontragent_id + "/date/" + date)
            .then(function (response) {
              self.datas.number = response.data.number;
            });
        } else {
          self.pay_date = 0;
        }
      },
      Changepaytypekassa(){
        let self=this;
        if(self.datas.pay_type_kassa==3){
          if(self.datas.pay_type_id==3){
            self.datas.summa=self.datas.kassa_summa
          }else{
            self.datas.summa=self.datas.kassa_summa*self.datas.dollar_rate;
          }
        }else{
            self.datas.summa=0;
        }
      },
      Dollarrate() {
        let self = this;
        self.$axios.get("api/v1/dollar-exchange-rate/last")
        .then(function(response) {
            self.datas.dollar_rate=response.data.rate;
        });
      },
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
      Skladlist() {
        let self = this;
        self.$axios({
          method: "get",
          url: "api/v1/sklads"
        }).then(function (response) {
          self.sklad_list = response.data;
        });
      },
      Paytypelist() {
        let self = this;
        self.$axios({
          method: "get",
          url: "api/v1/pay-type"
        }).then(function (response) {
          self.pay_type_list = response.data;
        });
      },
      Kontragentlist() {
        let self = this;
        self.$axios({
          method: "get",
          url: "api/v1/kontragent"
        }).then(function (response) {
          self.kontragent_list = response.data;
        });
      },
      Trash(id) {
        let self = this;
        self.$axios({
          method: "delete",
          url: "api/v1/prixod/id/" + id
        }).then(function (response) {
          self.Data();
        });
      },
      Changevaluta() {
        this.valuta = this.som / this.kurs;
      }
    }
  }
</script>