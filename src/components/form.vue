<template>
  <div>
      <Header />
      <ErrorMsg />
      <Form1 v-if="showForm == 1" /> 
      <Form2 v-if="showForm == 2" />
      <Success v-if="showForm == 3" />
      <div class="progressBar">Page: {{this.$store.state.currentForm}} / 3</div>
  </div>
</template>

<script>
import Header from './header.vue'
import ErrorMsg from './errorMessag.vue'
import Form1 from './form-1.vue'
import Form2 from './form-2.vue'
import Success from './success.vue'

export default {
  name: 'Form',
   components: {
    Header,
    ErrorMsg,
    Form1,
    Form2,
    Success
  },
  computed: {
    showForm() {
      return this.$store.state.currentForm
    }
  }
}
</script>