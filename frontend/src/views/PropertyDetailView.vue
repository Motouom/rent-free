<template>
  <div class="property-detail container mx-auto p-4">
    <div class="flex flex-wrap">
      <!-- Property Images -->
      <div class="w-full lg:w-1/2">
        <div class="space-y-4">
          <img
            src="../assets/public/pexels-binyaminmellish-106399.jpg"
            v-for="(image, index) in propertyImages"
            :key="index"
            alt="Property Image"
            class="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <!-- Property Details -->
      <div class="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        <h2 class="text-2xl font-semibold">{{ property.name }}</h2>
        <p class="text-gray-600 mt-2">{{ property.description }}</p>

        <!-- Amenities -->
        <div class="mt-4">
          <h3 class="text-xl font-medium">Amenities</h3>
          <ul class="list-disc ml-5 mt-2">
            <li v-for="amenity in property.amenities" :key="amenity">{{ amenity }}</li>
          </ul>
        </div>

        <!-- Owner Details -->
        <div class="mt-4">
          <h3 class="text-xl font-medium">Owner Details</h3>
          <p><strong>Name:</strong> {{ property.owner.name }}</p>
          <p><strong>Contact:</strong> {{ property.owner.contact }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dummy property data
      property: {
        name: "Cozy Beachside Apartment",
        description:
          "A beautiful 2-bedroom apartment with a view of the beach, offering all the amenities you need for a relaxing stay.",
        amenities: [
          "Wi-Fi",
          "Air Conditioning",
          "Swimming Pool",
          "Parking",
          "Fully Furnished",
        ],
        owner: {
          name: "John Doe",
          contact: "+1234567890",
        },
      },
      propertyImages: [
        "image1.jpg", // Add the image filenames here
        "image2.jpg",
        "image3.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.property-detail {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
