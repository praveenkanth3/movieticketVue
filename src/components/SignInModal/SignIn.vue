<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" tabindex="0" @keydown.esc="() => onCloseModel(false)">
      <div class="modal">

        <header class="modal-header" id="modalTitle">
          Login
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

          <div>Password <span class="highlight">*</span></div>
          <input-box
              placeholder="Enter the password"
              inputType="text"
              :value="password" 
              :onChange="onChangePassword"
          />
          <span class="highlight">{{ errMsg }}</span>
        </section>

        <footer class="modal-footer">
          <button-component customClass="btn-green" label="Sign In" :onClickBtn="onClickSignIn"/>

          <div>
            Dont have an account? <span @click="onClickCreateAccount" class="create-account">Create new account</span>
          </div>
        </footer>

      <loader v-if="loader" />
      </div>
    </div>
  </transition>
</template>
<script>
import '../SignUp/Popup.css';
import ButtonComponent from '../Button/ButtonComponent.vue'
import InputBox from '../Input/InputBox.vue'
import { mapGetters } from 'vuex';
import Loader from '../Loader/Loader.vue';
import apiServices from '@/apis/api';

export default {
  name: 'SignIn',

  data() {
    return {
      id: '',
      password: '',

      errMsg: '',

      loader: false
    }
  },

  props: {
    onCloseModel: Function,
    operatorSignup: Function
  },

  mounted() {
    this.$refs.input.focus();
    // this.setAllUsers();
  },

  methods: {

    onClickCreateAccount() {
      this.onCloseModel(false);
      this.operatorSignup(true);
    },

    // async setAllUsers() {
    //   const allUsers = await apiServices.getUsers();
    //   this.$store.dispatch('setAllUsers',allUsers)
    // },

    onChangeId(val) {
      this.id = val
    },

    onChangePassword(val) {
      this.password = val
    },

    async onClickSignIn() {
      this.loader = true;
      const allUsers = await apiServices.getUsers();
      if (this.id.length !== 0 && this.password.length >= 8) {
        let user = allUsers.find(val => val.loginId === this.id);
        if (!user) {
          alert('invalid user');
          this.loader = false;
        }else {
          if (user.loginId === this.id && user.password === this.password) {
            this.loader = false;
            this.$store.dispatch('setUser',user);
            alert('successfully loged in');
            this.id = '';
            this.password = '';
            this.onCloseModel(false);
          }else {
            this.loader = false;
            alert('id or password wrong');
          }
        }
      }else {
        this.loader = false;
        this.errMsg = 'enter the valid id and password'
        // alert('Id should be valid,password must be 8 digit');
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
      Loader
  }
}

</script>
<style scoped>
.create-account {
  color: blue;
  cursor: pointer;
}

.highlight {
  color: red;
}
</style>