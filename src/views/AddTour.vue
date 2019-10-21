<template>
    <div id="create-tour">
        <h1>Create a new tour</h1>
        <span id="error" v-if="error.status">{{error.msg}}</span>
        <Form @create="createTour" :tour="tour" btnName="Create"/>
    </div>
</template>

<script>

    import Form from '../components/TourForm';

    export default {
        data() {
            return {
                tour: {
                    name: '',
                    image: 'https://restcountries.eu/data/ata.svg',
                    description: '',
                },
                error: {
                    status: false,
                    msg: '',
                },
            };
        },
        methods: {
            createTour() {
                this.error.status = false;
                if (this.tour.name && this.tour.description) {
                    this.$axios.post(this.$url, this.tour)
                        .then((res) => this.$router.replace('/'))
                        .catch(() => {
                            this.error.status = true;
                            this.error.msg = 'Something wrong happend. Try it again.';
                        });
                } else {
                    this.error.status = true;
                    this.error.msg = 'Title and description required';
                }
            },
        },
        components: {
            Form,
        }
    };
</script>

<style lang="scss" scoped>

    #create-tour {
        padding: 40px;
    }

    h1 {
        margin-bottom: 20px;
    }

    #error {
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

    }

</style>