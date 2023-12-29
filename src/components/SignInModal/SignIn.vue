<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" tabindex="0" @keydown.esc="() => onCloseModel(false)">
      <div class="modal">

        <header class="modal-header" id="modalTitle">
          Login
          <button-component customClass="btn-close" label="x" :onClickBtn="() => onCloseModel(false)"/>
        </header>

        <section class="modal-body" id="modalDescription">
          <div>Login Id</div>
          <input-box 
              placeholder="Enter the id"
              inputType="text"
              :value="id" 
              :onChange="onChangeId"
              ref="input"
          />

          <div>Password</div>
          <input-box
              placeholder="Enter the password"
              inputType="text"
              :value="password" 
              :onChange="onChangePassword"
          />
        </section>

        <footer class="modal-footer">
          <button-component customClass="btn-green" label="Sign In" :onClickBtn="onClickSignIn"/>

          <div>
            Dont have an account? <span @click="onClickCreateAccount" class="createAccount">Create new account</span>
          </div>
        </footer>

      </div>
    </div>
  </transition>
</template>
<script>
import '../SignUp/Popup.css';
import ButtonComponent from '../Button/ButtonComponent.vue'
import InputBox from '../Input/InputBox.vue'
// import { mapGetters } from 'vuex';

export default {
  name: 'SignIn',

  data() {
    return {
      id: '',
      password: '',
    }
  },

  props: {
    onCloseModel: Function,
    operatorSignup: Function
  },

  mounted() {
    this.$refs.input.focus();
  },

  methods: {

    onClickCreateAccount() {
      this.onCloseModel(false);
      this.operatorSignup(true);
    },

    onChangeId(val) {
      this.id = val
    },

    onChangePassword(val) {
      this.password = val
    },

    onClickSignIn() {
      if (this.id.length !== 0 && this.password.length >= 8) {
        console.log('ans')
        let userFromLocalStorage = JSON.parse(localStorage.getItem(this.id));
        if (!userFromLocalStorage) {
          alert('invalid user');
        }else {
          if (userFromLocalStorage.id === this.id && userFromLocalStorage.password === this.password) {
            // this.$store.dispatch('setLogedinType', { id: this.id, password: this.password, isAdmin: false });
            // window.operatorId = this.id;
            // this.$router.push({ name: 'OperatorDetailView', query: { tollLoc: this.tollLocation } });
          }else {
            alert('id or password wrong');
          }
        }
      }else {
        alert('Id should be valid,password must be 8 digit');
      }

    }
  },

  components: {
      ButtonComponent,
      InputBox
  }
}

</script>
<style scoped>
.createAccount {
  color: blue;
  cursor: pointer;
}
</style>