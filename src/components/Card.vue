<template>
    <router-link :to="id != undefined ? `/tour/${id}` : '' " class="tour-card">
        <img :src="img" alt="Tour image">
        <h3>{{title}}</h3>
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'tour-card',
    props: {
        id: Number,
        img: String,
        title: String,
    },
});
</script>

<style lang="scss" scoped>
    .tour-card {
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        padding: 15px 10px;
        margin: 10px 0;
    }

    .tour-card:hover {
	    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }

    img {
	    width: 70px;
    }

    h3 {
        flex: 2;
        font-weight: normal;
        letter-spacing: .5px;
        margin: 0 5px;
    }
</style>