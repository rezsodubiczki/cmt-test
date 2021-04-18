import { createStore } from 'vuex'

export default createStore({
  state: {
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      streetNumber: '',
      streetName: '',
      streetType: '',
      suburb: '',
      postcode: '', 
    },
    currentForm: 1,
    errorMsg: []
  },
  mutations: {
    updateFirstName(state, firstName) {
      state.formData.firstName = firstName
    },
    updateLastName(state, lastName) {
      state.formData.lastName = lastName
    },
    updateEmail(state, email) {
      state.formData.email = email
    },
    updatePhone(state, phone) {
      state.formData.phone = phone
    },
    updateStreetNumber(state, streetNumber) {
      state.formData.streetNumber = streetNumber
    },
    updateStreetName(state, streetName) {
      state.formData.streetName = streetName
    },
    updateStreetType(state, streetType) {
      state.formData.streetType = streetType
    },
    updateSuburb(state, suburb) {
      state.formData.suburb = suburb
    },
    updatePostcode(state, postcode) {
      state.formData.postcode = postcode
    }
  }
})
