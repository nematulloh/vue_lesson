<template>
  <router-link class="btn btn-primary" to="/unitcreate">+</router-link>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>Nomi</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>
          <button type="button" @dblclick="Trash(item.id)">
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
        'data': []
      }
    },
    created() {
      this.Data();
    },
    methods: {
      Data() {
        let self = this;
        self.$axios({
          method: "get",
          url: "api/v1/unit"
        }).then(function (response) {
          self.data = response.data;
        });
      },
      Trash(id) {
        let self = this;
        self.$axios({
          method: "delete",
          url: "api/v1/unit/id/" + id
        }).then(function (response) {
          self.Data();
        });
      }
    }
  }
</script>