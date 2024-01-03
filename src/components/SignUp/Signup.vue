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
              inputType="number"
              :value="mobile"
              maxlength="10"
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
import apiServices from  '../../apis/api'


export default {
  name: 'SignUp',

  props: {
    onCloseModel: Function,
  },

  data() {
    return {
      id: '',
      password: '',
      mobile: '',
      
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

    onChangePassword(val) {
      this.password = val
    },

    onChangeMobile(val) {
      if(val.length < 10) {
        console.log('ss')
        this.mobile = val;
      } else {
        return ;
      }
    },

    async onClickSignUp() {
      this.loader = true;
      if (this.id !== '' && (this.password !== '' && this.password.length >= 8)) {
        let user = this.allUsers?.find(val => val.loginId === this.id);
        if (user) {
          alert('user already present');
          this.loader = false;
        }
        else {
          const res = await apiServices.createUser({loginId: this.id,mobile:this.mobile,password:this.password});
          console.log(res);
          if(res.status === 201 && res.statusText === "Created") {
            this.loader = false;
            alert('successfully created the user');
            this.id = '';
            this.mobile = '';
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
        alert('id or password are not valid');
        this.loader = false;
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