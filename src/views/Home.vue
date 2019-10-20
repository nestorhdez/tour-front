<template>
  <div class="home">
    <h1>List of tours</h1>
    <span v-if="error.status">{{error.msg}}</span>
    <router-link to="/create/tour" v-if="!error.status" class="add-card">Add a new tour</router-link>
    <Card :title="tour.name" :img="tour.image" :id="tour.id" v-for="(tour, i) in tours" :key="i"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'home',
  data() {
    return {
      tours: [],
      error: {
        status: false,
        msg: '',
      },
    };
  },
  components: {
    Card,
  },
  methods: {
    getTours() {
      this.error.status = false;
      this.$axios.get('http://localhost:3000/res')
        .then( (res) => {
          this.tours = res.data;
          if (res.data.length === 0) {
            this.error.status = true;
            this.error.msg = 'There are no tours to show';
          }
        })
        .catch( (err) => {
          this.error.status = true;
          this.error.msg = 'Something wrong happend...';
        });
    },
  },
  created() {
    this.getTours();
  },
};
</script>

<style lang="scss" scoped>
  .home {
    width: 480px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    margin: 25px 0;
  }

  span {
    color: #d03838;
    font-weight: 500;
    font-size: 1.4rem;
    margin-top: calc(50vh - 94px);
  }

  .add-card {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    margin: 10px 0;
    cursor: pointer;
  }

  .add-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    .home {
      width: 100%;
      padding: 0 30px;
    }
  }

</style>
