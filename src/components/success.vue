<template>
    <div class='form'>
        <div class="formData">
            <p>Name: {{formData.firstName}} {{formData.lastName}}</p>
            <p>Email: {{formData.email}}</p>
            <p v-if="formData.phone">Phone: {{formData.phone}}</p>
            <p>Address:</p>
            <p>       
                {{formData.streetNumber}} {{formData.streetName}} {{formData.streetType}} {{formData.streetNumber}}
            </p>
            <p>       
                {{formData.suburb}} {{formData.postcode}}
            </p>

            <div class="editLink" v-on:click="edit()">Edit</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Success',
  computed: {
    formData() {
      return this.$store.state.formData
    }
  },
  methods: {
    edit() {
      this.$store.state.currentForm = 1
    }
  }
}
</script>