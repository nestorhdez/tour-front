<template>
  <div id="tour-page" class="d-flex justify-between">
    
    <h1 class="basis66">{{tour.name}}</h1>
    <div class="basis30">
      <img :src="tour.image" alt="Tour image" v-if="tour.image">
    </div>

    <div class="info-container justify-between">
     
      <div class="box basis66">
        <span class="title d-block">Description</span>
        <p v-if="tour.description">{{tour.description}}</p>
      </div>
     
      <div class="box basis30 info">
        <span class="title d-block">Info</span>
        <span class="d-flex justify-between">Created: <span v-if="tour.createdAt">{{dateToString(tour.createdAt)}}</span></span>
        <span class="d-flex justify-between">Modified: <span v-if="tour.lastModified">{{dateToString(tour.lastModified)}}</span></span>
      </div>
    
    </div>
 
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'tour-page',
  data() {
    return {
      tour: '',
    };
  },
  methods: {
    getTour() {
      const id = window.location.hash.split('/').slice(-1)[0];
      this.$axios.get(`http://localhost:3000/res/${id}`)
        .then((res) => this.tour = res.data)
        .catch((err) => this.$router.replace('/'));
    },
    dateToString(timestamp) {
      const date = new Date(timestamp);
      return moment(date, 'YYYYMMDD').fromNow();
    },
  },
  created() {
    this.getTour();
  },
};
</script>

<style lang="scss" scoped>

  .d-flex {
    display: flex;
  }

  .justify-between {
    justify-content: space-between;
  }

  .d-block {
    display: block;
  }

  #tour-page {
    padding: 55px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  h1 {
    text-align: left;
  }

  img {
    width: 100%;
  }

  .box {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    text-align: left;
    padding: 20px;
  }

  .info-container {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
  }

  .info {
    height: 100%;
    span {
      font-weight: 500;
    }
  }

  .info span:nth-child(2) {
    margin-bottom: 7px;
  }

  .basis66 {
    flex-basis: 66%;
  }

  .basis30 {
    flex-basis: 30%;
  }
  .title {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 15px;
  }

</style>