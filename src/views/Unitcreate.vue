<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <label for="" class="form-label">Nomi</label><br>
        <input type="text" v-model="datas.name" class="form-input" />
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="Send()">save</button>
  </form>
</template>
<script>
  export default {
    data() {
      return {
        'datas': {
          name: ""
        }
      }
    },
    mounted() {
    },
    created() {
    },
    methods: {
      Send() {
        let self = this;
        self.$axios({
          method: 'post',
          url: 'api/v1/unit',
          data: self.datas
        }).then(function (response) {
          self.$router.push({ name: "olchov" });
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
    }
  }
</script>