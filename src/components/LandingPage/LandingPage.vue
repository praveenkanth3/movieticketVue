<template>
    <div class="body">
        <HeaderComponent title="Book Your Show"/>
        <div class="user-details">
            <div class="error-msg">Please fill the form to proceed</div>
            <InputBox placeholder="Name" :value="name" :onChange="onChangeName" />
            <InputBox placeholder="Contact No." inputType="text" :value="contact" maxlength="10" :onChange="onChangeContact" />
            <SelectBox class="select-box" placeholder="Gender" :lists="['Male', 'Female']" :onChange="onChangeGender" />
            <CustomButton customClass="btn" class="btn-container" label="Continue" :onClickBtn="onClickContinue" />
            <div class="error-msg">{{ errorMsg }}</div>
        </div>
    </div>
</template>

<script>
import InputBox from "../Input/InputBox.vue"
import SelectBox from "../SelectBox/SelectBox.vue"
import CustomButton from "../Button/CustomButton.vue";
import HeaderComponent from "../HeaderComponent/HeaderComponent.vue"

export default {
    name: 'LandingPage',

    data() {
        return {
            name: '',
            contact: '',
            gender: '',
            errorMsg: '',
        }
    },

    methods: {
        onChangeName(val) {
            this.name = val;
        },

        onChangeContact(val) {
            if(val.length < 11 && val.length > 0) {
                this.contact = val.replace(/[^0-9]/gi, "")
            }
        },

        onChangeGender(val) {
            this.gender = val;
        },

        onKeyDownContact() {
            console.log('sad')
            if(this.contact.length===10) return false;
        },

        onClickContinue() {
            if(!this.name || !this.contact || !this.gender) {
                this.errorMsg = "Please fill all the fields"
            }else { 
                this.errorMsg = '';
                this.$store.dispatch('setUser', {name: this.name,contact: this.contact,gender:this.gender});
                this.name = '';
                this.contact = '';
                this.gender = '';
                this.$router.push({ name: 'HomePage'})
            }
        }
    },

    components: {
        InputBox,
        SelectBox,
        HeaderComponent,
        CustomButton
    }


}

</script>

<style>

.body {
    background: antiquewhite;
    height: 100vh;
}

.user-details {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    justify-content: center;
    align-items: center;
}

.select-box {
    padding-left: 20px;
}

.btn {
    background: #0eb2e8;
    color: white;
    width: 150px;
    font-weight: bold;
    border: 1px solid white;
    height: 30px;
    border-radius: 10px;
}

.btn-container {
    padding-left: 20px;
}

.error-msg {
    color:red;
    padding-left: 20px;
}
</style>