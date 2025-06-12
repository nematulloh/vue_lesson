    
    <template>
      <span class="errormessage" v-if="error">
        {{error_message}}
      </span>
      <span v-else>
        xatolik yoq
      </span>
      <div class="logindiv">
      <form >
        <h3>
            Biznes dasturlash markazi
        </h3>
        <label for="" class="form-label">Sklad</label>
        <v-select v-model="selected" :options="options" label="name"       :reduce="option => option.id" />
        <label for="" class="form-label">login</label>
        <input type="text"  v-model="login" class="form-control">
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
      export default{
        // components: { VSelect },
        data(){
          return {
            "selected":null,
            "sklad_list": [
        { name: "Sklad1",id:1 },
        { name: "Sklad2",id:2 },
        { name: "Sklad3",id:3 },
      ],
      "user_list": [
        { name: "user1",id:1,passwor:'123' },
        { name: "Sklad2",id:2,passwor:'1223' },
        { name: "Sklad3",id:3 ,passwor:'123w'},
      ],

            "error":false,
            "login":"",
            "parol":"",
            'error_message':""
          }
        },
        mounted(){
          setInterval(() => {
            this.error=false;
          }, 5000);
        },
        methods:{
          Send(){
            
            if(this.login=='admin' && this.parol=='123456'){
              this.$router.push('/');
            }else{
              this.error=true;
              this.error_message='login yoki parol notogri';
            }
          }
        }
      }
    </script>
    