<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ breed }}
      </p>
      <div @click="goToDetails()" class="btn btn-primary btn-orange">
        See Details
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid lightblue;
}
.btn-orange {
  background-color: lightblue;
  border: 2px solid lightblue;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>
