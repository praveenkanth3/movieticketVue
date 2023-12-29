<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" tabindex="0" @keydown.esc="() => onCloseModel(false)">
      <div class="modal">

        <header class="modal-header" id="modalTitle">
          Sign Up
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

          <div>Mobile Number</div>
          <input-box
              placeholder="Enter the Mobile No."
              inputType="tel"
              :value="mobile" 
              :onChange="onChangeMobile"
          />

          <div>Password</div>
          <input-box
              placeholder="Create password"
              inputType="text"
              :value="password" 
              :onChange="onChangePassword"
          />
        </section>

        <footer class="modal-footer">
          <button-component customClass="btn-green" label="Sign Up" :onClickBtn="onClickSignUp"/>
        </footer>

      </div>
    </div>
  </transition>
</template>
  
<script>
import './Popup.css';
import ButtonComponent from '../Button/ButtonComponent.vue';
import InputBox from '../Input/InputBox.vue';


export default {
  name: 'SignUp',

  props: {
    onCloseModel: Function,
  },

  data() {
    return {
      id: '',
      password: '',
      mobile: ''
    }
  },

  mounted() {
    this.$refs.input.focus();
  },

  methods: {
    onChangeId(val) {
      this.id = val
    },

    onChangePassword(val) {
      this.password = val
    },

    onChangeMobile(val) {
      this.mobile = val;
    },

    onClickSignUp() {
      if (this.id !== '' && (this.password !== '' && this.password.length >= 8)) {
        let userFromLocalStorage = JSON.parse(localStorage.getItem(this.id.toLowerCase()));
        if (userFromLocalStorage) {
          alert('user already present');
        }
        else {
          localStorage.setItem(this.id, JSON.stringify({ id: this.id, password: this.password }))
          alert('successfully registered');
          this.id = '';
          this.password = '';
          this.onCloseModel();
        }
      }
      else {
        alert('id or password are not valid');
      }
    }
  },

  components: {
    ButtonComponent,
    InputBox
  }
}
</script>