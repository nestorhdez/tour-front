<template>
    <div id="form-container" v-if="tour">
        <div class="form-section">
            <label for="title">Title*</label>
            <input v-model="tour.name" type="text" id="title" placeholder="Title of the tour" required/>
        </div>

        <div class="form-section">
            <label for="image">Image</label>
            <input @change="changeFile" ref="file" type="file" id="image"/>
        </div>

        <div class="form-section">
            <label for="description">Description*</label>
            <textarea v-model="tour.description" rows="10" id="description" placeholder="Description of the tour" required/>
        </div>

        <button @click="emitEvent">{{btnName}}</button>

    </div>
</template>

<script>
export default {
    name: 'tour-form',
    props: {
        btnName: String,
        tour: {
            name: String,
            description: String,
            image: String,
        },
    },
    methods: {
        changeFile() {
            this.tour.image = this.$refs.file.files[0];
        },
        emitEvent() {
            this.$emit(this.btnName.toLowerCase());
        },
    }
}
</script>

<style lang="scss" scoped>
    
    #form-container {
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        text-align: left;
        padding: 20px 50px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .form-section:nth-child(1) {
        flex-basis: 60%;
    }

    .form-section:nth-child(2) {
        flex-basis: 30%;
        margin-left: auto;
    }

    .form-section:nth-child(3) {
        flex-basis: 100%;
    }

    label {
        display: block;
        margin: 15px 0;
        font-weight: 500;
    }

    input {
        outline: none;
    }

    #title {
        width: 100%;
        padding: 8px;
        border-radius: 3px;
        border: 1px solid #bdbdbd;
        font-size: 1rem;
    }

    textarea {
        width: 100%;
        outline: none;
        border-radius: 3px;
        border: 1px solid #bdbdbd;
        padding: 20px;
        font-size: 1rem;
    }

    button {
        margin-top: 20px;
        padding: 5px 10px;
        border-radius: 3px;
        background-color: #35495d;
        color: white;
        font-size: 0.9rem;
        font-weight: 500;
        margin-left: auto;
        outline: none;
        border: none;
    }

    button:active {
        background-color: #232d38;
    }

    @media (max-width: 768px) {

        #form-container {
            width: 100%;
        }

        .form-section:nth-child(1) {
            flex-basis: 100%;
        }

    }

</style>