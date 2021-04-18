<template>
  <div class='form'>
    <p>
      <label>Street Number: </label>
      <input 
        v-model="streetNumber" 
        type="number" 
      />
    </p>
    <p>
      <label>Street Name: </label>
      <input 
        v-model="streetName"
        type="text" 
      />
    </p>
    <p>
      <label>Street Type: </label>
      <select v-model="streetType">
        <option v-for="tp in streetTypeList" :key="tp" :value="tp">
          {{tp}}
        </option>
      </select>
    </p>
    <p>
      <label>Suburb: </label>
      <input 
        v-model="suburb"
        type="text"
      />
    </p>
    <p>
      <label>Postcode: </label>
      <input 
        v-model="postcode"
        type="text"
      />
    </p>
    <button class="button btn-submit" :disabled="requiredFields()" v-on:click="formValidator()">Submit</button>
  </div>
</template>

<script>

export default {
  name: 'Form',
  data () {
    return {
      streetTypeList: ['Cl','Ct','St','Pl','Ave'],
    }
  },
  computed: {
    streetNumber: {
      get () {
        return this.$store.state.formData.streetNumber
      },
      set (value) {
        this.$store.commit('updateStreetNumber', value)
      }
    },
    streetName: {
      get () {
        return this.$store.state.formData.streetName
      },
      set (value) {
        this.$store.commit('updateStreetName', value)
      }
    },
    streetType: {
      get () {
        return this.$store.state.formData.streetType
      },
      set (value) {
        this.$store.commit('updateStreetType', value)
      }
    },
    suburb: {
      get () {
        return this.$store.state.formData.suburb
      },
      set (value) {
        this.$store.commit('updateSuburb', value)
      }
    },
    postcode: {
      get () {
        return this.$store.state.formData.postcode
      },
      set (value) {
        this.$store.commit('updatePostcode', value)
      }
    }
  }, 
  methods:{
    requiredFields() {
      return (this.streetNumber.length > 0 && this.streetName.length > 0 && this.suburb.length > 0 && this.postcode.length > 0) ? false: true
    },
    formValidator() {
      let postCode = this.postcode
      let po = postCode.substring(0, 1)

      this.$store.state.errorMsg = []
      
      if(parseInt(po) == 0) postCode = postCode.substring(1)

      if(postCode < 800 || postCode > 7999) {
        this.$store.state.errorMsg.push('Please enter a valid postcode')
      }
      else {
        this.$store.state.currentForm = 3
      } 
    }
  }
}
</script>