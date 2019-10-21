<template>
    <div id="create-tour">
        <h1>Edit tour</h1>
        <span id="message" v-if="message.status" :style="message.res ? 'color: #2dad2b;' : ''">{{message.msg}}</span>
        <div id="edit-container" v-if="tour">
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

            <button @click="editTour">Create</button>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tour: {},
                message: {
                    status: false,
                    res: false,
                    msg: '',
                },
            };
        },
        methods: {
            changeFile() {
                this.tour.image = this.$refs.file.files[0];
                console.log(this.$refs.file.files[0]);
            },
            editTour() {
                this.message.status = false;
                if (this.tour.name && this.tour.description) {
                    this.$axios.put(`${this.$url}/${this.tour.id}`, this.tour)
                        .then((res) => {
                            this.message.status = true;
                            this.message.msg = 'Saved correctly';
                            this.message.res = true;
                        })
                        .catch(() => {
                            this.message.status = true;
                            this.message.res = false;
                            this.message.msg = 'Something wrong happend. Try it again.';
                        });
                } else {
                    this.message.status = true;
                    this.message.res = false;
                    this.message.msg = 'Title and description required';
                }
            },
        },
        created() {
            const id = window.location.hash.split('/').slice(-1)[0];
            this.$axios.get(`${this.$url}/${id}`)
                .then((res) => this.tour = res.data)
                .catch(() => this.$router.go(-1));
        },
    };
</script>

<style lang="scss" scoped>

    #create-tour {
        padding: 40px;
    }

    h1 {
        margin-bottom: 20px;
    }

    #edit-container {
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

    #message {
        color: #d03838;
        font-weight: 500;
        font-size: 1.3rem;
        margin-bottom: 20px;
        display: block;
    }

    @media (max-width: 768px) {

        #create-tour {
            padding: 40px 20px;
        }

        #edit-container {
            width: 100%;
        }

        .form-section:nth-child(1) {
            flex-basis: 100%;
        }

    }

</style>