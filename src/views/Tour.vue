<template>
  <div id="tour-page" class="d-flex justify-between">
    <Modal @remove="removeTour" @hide="() => this.modal = false" v-if="modal"/>
    <h1 class="main-item">{{tour.name}}</h1>
    <div class="aside-item">
      <img :src="tour.image" alt="Tour image" v-if="tour.image">
    </div>
    
    <div class="box main-item description">
      <span class="title d-block">Description</span>
      <p v-if="tour.description">{{tour.description}}</p>
    </div>
    
    <div class="box aside-item info">
      <span class="title d-block">Info</span>
      <span class="d-flex justify-between">Created: <span v-if="tour.createdAt">{{dateToString(tour.createdAt)}}</span></span>
      <span class="d-flex justify-between">Modified: <span v-if="tour.lastModified">{{dateToString(tour.lastModified)}}</span></span>
    </div>

    <div id="btn-actions-container" class="d-flex flex-column">
      <router-link :to="`/edit/${id}`">Edit tour</router-link>
      <button @click="() => this.modal = true" id="remove">Remove tour</button>
    </div>
 
  </div>
</template>

<script>
import moment from 'moment';
import Modal from '../components/RemoveModal.vue';

export default {
  name: 'tour-page',
  data() {
    return {
      tour: '',
      id: '',
      modal: false,
    };
  },
  methods: {
    getTour() {
      this.$axios.get(`http://localhost:3000/res/${this.id}`)
        .then((res) => this.tour = res.data)
        .catch(() => this.$router.replace('/'));
    },
    removeTour() {
      this.$axios.delete(`http://localhost:3000/res/${this.id}`)
        .then(() => this.$router.replace('/'));
    },
    dateToString(timestamp) {
      const date = new Date(timestamp);
      return moment(date, 'YYYYMMDD').fromNow();
    },
  },
  created() {
    this.id = window.location.hash.split('/').slice(-1)[0];
    this.getTour();
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss" scoped>

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
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
    position: relative;
    min-height: 100vh;
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

  .description {
    align-self: flex-start;
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

  #btn-actions-container {
    margin: 80px auto 40px;
    a {
      background: white;
      border-radius: 3px;
      padding: 5px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  #remove {
      padding: 5px 5px;
      border-radius: 4px;
      border: none;
      background-color: transparent;
      color: #d23d3d;
      outline: none;
      font-weight: 500;
      font-size: .9rem;
      margin-top: 30px;
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