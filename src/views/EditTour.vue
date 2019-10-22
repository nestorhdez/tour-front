<template>
    <div id="edit-tour">
        <h1>Edit tour</h1>
        <span id="message" v-if="message.status" :style="message.res ? 'color: #2dad2b;' : ''">{{message.msg}}</span>
        <Form @edit="editTour" :tour="tour" btnName="Edit"/>
    </div>
</template>

<script>

    import Form from '../components/TourForm';

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
            uploadImg(img) {
                const fd = new FormData();
                fd.append('upload_preset', 'qzlyjodo');
                fd.append('tags', 'browser_upload');
                fd.append('file', img);
                return this.$axios.post('https://api.cloudinary.com/v1_1/df9pnnowd/upload', fd, {
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                    })
                    .then((res) => this.tour.image = res.data.secure_url)
                    .catch(() => {
                        this.error.status = true;
                        this.message.res = false;
                        this.error.msg = 'Something wrong happend. Try it again.';
                    });
            },
            async editTour(img) {
                this.message.status = false;
                await this.uploadImg(img);
                if (this.tour.name && this.tour.description && this.tour.image) {
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
                    this.message.msg = 'Title, image and description required';
                }
            },
        },
        created() {
            const id = window.location.hash.split('/').slice(-1)[0];
            this.$axios.get(`${this.$url}/${id}`)
                .then((res) => this.tour = res.data)
                .catch(() => this.$router.go(-1));
        },
        components: {
            Form,
        },
    };
</script>

<style lang="scss" scoped>

    #edit-tour {
        padding: 40px;
    }

    h1 {
        margin-bottom: 20px;
    }

    #message {
        color: #d03838;
        font-weight: 500;
        font-size: 1.3rem;
        margin-bottom: 20px;
        display: block;
    }

    @media (max-width: 768px) {

        #edit-tour {
            padding: 40px 20px;
        }

    }

</style>