<template>
  <div id="tour-page" class="d-flex justify-between">
    
    <h1 class="main-item">{{tour.name}}</h1>
    <div class="aside-item">
      <img :src="tour.image" alt="Tour image" v-if="tour.image">
    </div>
    
    <div class="box main-item">
      <span class="title d-block">Description</span>
      <p v-if="tour.description">{{tour.description}}</p>
    </div>
    
    <div class="box aside-item info">
      <span class="title d-block">Info</span>
      <span class="d-flex justify-between">Created: <span v-if="tour.createdAt">{{dateToString(tour.createdAt)}}</span></span>
      <span class="d-flex justify-between">Modified: <span v-if="tour.lastModified">{{dateToString(tour.lastModified)}}</span></span>
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

  .title {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 15px;
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
    margin-top: 35px;
  }

  .info {
    height: 100%;
    align-self: flex-start;
    span {
      font-weight: 500;
    }
  }

  .info span:nth-child(2) {
    margin-bottom: 7px;
  }

  .main-item {
    flex-basis: 66%;
  }

  .aside-item {
    flex-basis: 30%;
  }

  @media (max-width: 768px) {
    #tour-page {
      padding: 50px 30px;
    }

    h1 {
      margin-bottom: 35px;
    }

    .main-item, .aside-item {
      flex-basis: 100%;
    }
  }

</style>