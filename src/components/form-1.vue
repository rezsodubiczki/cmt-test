<template>
  <div class='form'>
    <p>
      <label>First Name: </label>
      <input 
        v-model="firstName" 
        type="text" 
      />
    </p>
    <p>
      <label>Last Name: </label>
      <input 
        v-model="lastName"
        type="text" 
      />
    </p>
    <p>
      <label>Email: </label>
      <input 
        v-model="email"
        type="email" 
      />
    </p>
    <p>
      <label>Phone: (+61) </label>
      <input 
        v-model="phone"
        type="number"
        placeholder="Optional"
      />
    </p>
    <button class="button" :disabled="requiredFields()" v-on:click="formValidator()">Next</button>
  </div>
</template>

<script>

export default {
  name: 'Form',
  computed: {
    firstName: {
      get () {
        return this.$store.state.formData.firstName
      },
      set (value) {
        this.$store.commit('updateFirstName', value)
      }
    }, 
    lastName: {
      get () {
        return this.$store.state.formData.lastName
      },
      set (value) {
        this.$store.commit('updateLastName', value)
      }
    },
    email: {
      get () {
        return this.$store.state.formData.email
      },
      set (value) {
        this.$store.commit('updateEmail', value)
      }
    },
    phone: {
      get () {
        return this.$store.state.formData.phone
      },
      set (value) {
        this.$store.commit('updatePhone', value)
      }
    }
  },
  methods:{
    requiredFields() {
      return (this.firstName.length > 0 && this.lastName.length > 0 && this.email.length > 0) ? false: true
    },
    formValidator() {
      this.$store.state.errorMsg = []
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) { 
        this.$store.state.errorMsg.push('Please enter a valid email address')
      }
      if (this.phone != '') {
        if (this.phone.length != 9) this.$store.state.errorMsg.push('Please enter a valid phone number')
      }
      if(this.$store.state.errorMsg.length == 0) {
        this.$store.state.currentForm = 2
      }
    }
  }
}
</script>