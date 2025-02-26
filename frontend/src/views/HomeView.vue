<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-16 text-center">
      <h1 class="text-4xl font-bold">Find Your Perfect Home</h1>
      <p class="mt-2 text-lg">Search from thousands of rental properties</p>

      <!-- Search Bar -->
      <div class="mt-6 flex justify-center">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by city, neighborhood, or address..."
          class="p-3 w-80 rounded-l-md text-gray-700"
        />
        <button
          @click="searchProperties"
          class="bg-white text-blue-600 px-6 py-3 rounded-r-md font-semibold hover:bg-gray-200"
        >
          Search
        </button>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-6 px-6 bg-white shadow-md rounded-lg mx-6 mt-6">
      <h2 class="text-xl font-semibold mb-4">Filters</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Price Range -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Price Range</label>
          <select v-model="selectedPrice" class="mt-1 p-2 w-full border rounded-md">
            <option value="">Any</option>
            <option value="1000">Up to $1000</option>
            <option value="2000">Up to $2000</option>
            <option value="3000">Up to $3000</option>
            <option value="4000">Up to $4000</option>
          </select>
        </div>

        <!-- Location -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Location</label>
          <select v-model="selectedLocation" class="mt-1 p-2 w-full border rounded-md">
            <option value="">Any</option>
            <option value="New York, NY">New York, NY</option>
            <option value="Los Angeles, CA">Los Angeles, CA</option>
            <option value="Chicago, IL">Chicago, IL</option>
            <option value="Austin, TX">Austin, TX</option>
          </select>
        </div>

        <!-- Property Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Property Type</label>
          <select v-model="selectedType" class="mt-1 p-2 w-full border rounded-md">
            <option value="">Any</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Featured Listings -->
    <section class="py-12 px-6">
      <h2 class="text-2xl font-semibold text-center mb-6">Featured Properties</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="property.image" alt="Property Image" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-bold">{{ property.title }}</h3>
            <p class="text-gray-700">{{ property.location }}</p>
            <p class="text-blue-600 font-semibold mt-2">${{ property.price }}/month</p>
            <p class="text-gray-500">{{ property.type }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedPrice: '',
      selectedLocation: '',
      selectedType: '',
      properties: [
        { id: 1, title: "Luxury Apartment", location: "New York, NY", price: 2500, type: "Apartment", image: "https://via.placeholder.com/300" },
        { id: 2, title: "Cozy Studio", location: "Los Angeles, CA", price: 1800, type: "Studio", image: "https://via.placeholder.com/300" },
        { id: 3, title: "Modern Condo", location: "Chicago, IL", price: 2200, type: "Condo", image: "https://via.placeholder.com/300" },
        { id: 4, title: "Spacious HomeView", location: "Austin, TX", price: 2800, type: "House", image: "https://via.placeholder.com/300" },
      ]
    };
  },
  computed: {
    filteredProperties() {
      return this.properties.filter(property => {
        const matchesSearch = !this.searchQuery ||
          property.location.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          property.title.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesPrice = !this.selectedPrice || property.price <= parseInt(this.selectedPrice);

        const matchesLocation = !this.selectedLocation || property.location === this.selectedLocation;

        const matchesType = !this.selectedType || property.type === this.selectedType;

        return matchesSearch && matchesPrice && matchesLocation && matchesType;
      });
    }
  },
  methods: {
    searchProperties() {
      console.log("Searching for:", this.searchQuery);
    }
  }
};
</script>
