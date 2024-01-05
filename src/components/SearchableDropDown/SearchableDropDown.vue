<template>
    <div class="select-box">
        <input
          class="input-box"
          :placeholder="placeholder"
          v-model="searchInput"
          @focus="() => showOptions()"
        />

        <div v-show="optionShow" class="dropdown-container">
            <div 
              class="dropdown-item" 
              v-for="(option, index) in filteredOptions" 
              :key="index" 
              @click="() => onClickDropDownItem(option)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SearchableDropDown',

    props: {
        options: {
            type: Array,
            required: true
        },

        placeholder: {
            type: String,
            required: true
        },

        value: {
          type: String,
          required: true
        },
        
        changeSeachInput: {
          type: Function
        }
    },

    data() {
        return {
            searchInput: this.value,
            
            optionShow: false 
        }
    },

    methods: {
        onClickDropDownItem(option) {
            this.searchInput = option

            this.$emit("onChangeOption", option);
            
            this.optionShow = false;
        },

       showOptions(){
          // this.searchInput = '';
          this.optionShow = true;
      }
    },

    computed: {
      filteredOptions() {
        const filtered = [];
        const regOption = new RegExp(this.searchInput, 'ig');

        for (const option of this.options) {
          if (this.searchInput.length < 1 || option.match(regOption)) {
            filtered.push(option);
          }
        }

        return filtered;
      }
    },

    watch: {
      searchInput(newValue) {
        this.changeSeachInput(newValue)
      }
    }
}

</script>

<style scoped>
.select-box {
    position: relative;
    /* display: block; */
}

.input-box {
      background: #fff;
      cursor: pointer;
      border: 1px solid #e7ecf5;
      border-radius: 15px;
      color: #333;
      display: block;
      padding: 5px;
      width:140px;
      height: 25px;
}

.dropdown-container {
  position: absolute;
  background-color: #fff;
  min-width: 248px;
  max-width: 248px;
  max-height: 248px;
  border: 1px solid #e7ecf5;
  overflow: auto;
  z-index: 1;
}

.dropdown-item {
    color: black;
    padding: 8px;
    text-decoration: none;
    display: block;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #e7ecf5;
}

.dropdown-container {
    display: none;
}

.select-box:hover .dropdown-container {
  display: block;
}
</style>