<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" tabindex="0" @keydown.esc="() => onCloseModel(false)">
      <div class="modal">

        <header class="modal-header" id="modalTitle">
          Sign Up
          <button-component customClass="btn-close" label="x" :onClickBtn="() => onCloseModel(false)"/>
        </header>

        <section class="modal-body" id="modalDescription">
          <div>Login Id <span class="highlight">*</span></div>
          <input-box 
              placeholder="Enter the id"
              inputType="text"
              :value="id" 
              :onChange="onChangeId"
              ref="input"
          />

          <div>Gender <span class="highlight">*</span></div>
          <select-component
              :options="['Male','Female']"
              @input="onChangeGender"
              :value="gender"
          />
          

          <div>Mobile Number <span class="highlight">*</span></div>
          <input-box
              placeholder="Enter the Mobile No."
              inputType="text"
              :value="mobile"
              maxlength="10"
              :onChange="onChangeMobile"
          />

          <div>Password <span class="highlight">*</span></div>
          <input-box
              placeholder="Create password"
              inputType="text"
              :value="password" 
              :onChange="onChangePassword"
          />
          <span class="highlight">{{ errorMsg }}</span>
        </section>

        <footer class="modal-footer">
          <button-component customClass="btn-green" label="Sign Up" :onClickBtn="onClickSignUp"/>
        </footer>
        <loader v-if="loader" />
      </div>
    </div>
  </transition>
</template>
  
<script>
import './Popup.css';
import ButtonComponent from '../Button/ButtonComponent.vue';
import InputBox from '../Input/InputBox.vue';
import { mapGetters } from 'vuex';
import Loader from '../Loader/Loader.vue';
import apiServices from  '../../apis/api';
import SelectComponent from '../SelectBox/SelectComponent.vue';


export default {
  name: 'SignUp',

  props: {
    onCloseModel: Function,
  },

  data() {
    return {
      id: '',
      password: '',
      gender: '',
      mobile: '',

      errorMsg:'',

      loader: false
    }
  },

  mounted() {
    this.$refs.input.focus();
    this.setAllUsers();
  },

  methods: {
    onChangeId(val) {
      this.id = val
    },

    async setAllUsers() {
      const allUsers = await apiServices.getUsers();
      this.$store.dispatch('setAllUsers',allUsers)
    },

    onChangeGender(val) {
      this.gender = val;
    },

    onChangePassword(val) {
      this.password = val
    },

    onChangeMobile(val) {
        this.mobile = val.replace(/\D/g, '');
    },

    async onClickSignUp() {
      this.loader = true;
      if (this.id && (this.password && this.password.length >= 8) && this.gender && (this.mobile && this.mobile.length === 10)) {
        let user = this.allUsers?.find(val => val.loginId === this.id);
        if (user) {
          alert('user already present');
          this.loader = false;
        }
        else {
          const res = await apiServices.createUser({loginId: this.id,gender:this.gender,mobile:this.mobile,password:this.password});
          console.log(res);
          if(res.status === 201 && res.statusText === "Created") {
            this.loader = false;
            alert('successfully created the user');
            this.id = '';
            this.mobile = '';
            this.gender = '';
            this.password = '';
            this.onCloseModel(false);
          }
          else {
            alert('error while creating user');
            this.loader = false;
          }
        }
      }
      else {
        // alert('id or password are not valid');
        this.loader = false;
        if(!this.id) {
          this.errorMsg = "enter the valid id"
        } else if(this.password.length < 8){
          this.errorMsg = "password length must be >= 8"
        } else if(!this.gender) {
          this.errorMsg = "Please Select Gender"
        } else if(this.mobile.length < 10) {
          this.errorMsg = "mobile no length must be = 10"
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      allUsers: 'allUsers'
    })
  },

  components: {
    ButtonComponent,
    InputBox,
    SelectComponent,
    Loader
  }
}
</script>

<style scoped>

.highlight{ 
  color: red;
}


</style>