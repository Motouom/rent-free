<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 p-2 w-full border rounded-md"
            :class="{ 'border-red-500': errors.email }"
            required
          />
          <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 p-2 w-full border rounded-md"
            :class="{ 'border-red-500': errors.password }"
            required
          />
          <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
        </div>

        <div class="mb-4">
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700"
            >Confirm Password</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="mt-1 p-2 w-full border rounded-md"
            :class="{ 'border-red-500': errors.confirmPassword }"
            required
          />
          <p v-if="errors.confirmPassword" class="text-sm text-red-500">
            {{ errors.confirmPassword }}
          </p>
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    }
  },
  methods: {
    validateForm() {
      this.errors = {} // Reset errors
      let valid = true

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.email || !emailRegex.test(this.email)) {
        this.errors.email = 'Please enter a valid email.'
        valid = false
      }

      // Password validation
      if (!this.password || this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters long.'
        valid = false
      }

      // Confirm password validation
      if (this.password !== this.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match.'
        valid = false
      }

      return valid
    },
    handleSubmit() {
      if (this.validateForm()) {
        alert('Form submitted!')
        // Add your form submission logic here (e.g., send to an API)
      }
    },
  },
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
