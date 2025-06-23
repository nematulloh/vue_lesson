<template>
  <form>
    <div class="row">
      <div class="col-md-6">
        <label for="" class="form-label">Nomi</label><br>
        <input type="text" v-model="datasend.name" class="form-input" />
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="Send()">save</button>
  </form>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    props: ["datasend"],
    mounted() {
    },
    created() {
    },
    methods: {
      Send() {
        let self = this;
        let method='post';
        var url='api/v1/extra-unit';
        if(self.$route.params.id){
        method='patch';
        url='api/v1/extra-unit/id/'+self.$route.params.id;
        }
        self.$axios({
          method: method,
          url: url,
          data: self.datasend
        }).then(function (response) {
          self.$router.push({ path: "/extraunit" });
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