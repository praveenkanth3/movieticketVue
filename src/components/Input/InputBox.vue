<template>
    <div class="inputContainer">
        <div v-if="label" class="label">{{ label  }}</div>

        <input 
            class="input" 
            :type="inputType" 
            :placeholder="placeholder" 
            :value="inputValue"
            :maxlength="maxlength"
            ref="input"
            @input="onChange($event.target.value)"
        />
    </div>
</template>

<script>

export default {
    name:'InputBox',

    props:{

        label:{
            type: String,
            required: false
        },

        placeholder: {
            type: String,
            required: false
        },

        value: {
            required:true
        },
        
        inputType: {
            type: String,
            required: false,
            default: 'text'
        },

        onChange: {
            type: Function,
            required: true
        },

        maxlength: {
            type: String,
            required: false,
            default: '9999'
        }
    },

    data(){
        return {
            inputValue: this.value
        }
    },

    methods: {
        focus() {
            this.$refs.input.focus()
        }
    },

    watch: {
      value: {
        handler() {
          this.inputValue = this.value;
        }
      }
    }
}

</script>

<style>

.inputContainer {
    display: flex;
    column-gap: 10px;
}

.input{
    width: 150px;
    border-radius: 10px;
    height: 30px;
    border: 1px solid gray;
}

.input:focus-visible {
    outline: none;
}

.label {
    font-weight: bold;
    text-align: center;
    padding: 5px;
}

</style>