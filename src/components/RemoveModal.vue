<template>
    <div id="remove-modal-container">
        <div id="remove-modal">
            <span id="modal-title">Do you want to delete this tour?</span>
            <div id="responses">
                <span @click="$emit('hide')">No</span>
                <span @click="$emit('remove')">Yes</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #remove-modal-container {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);;
    }

    #remove-modal {
        position: absolute;
        top: calc(50% - 15%);
        left: calc(50% - 20%);
        width: 40%;
        height: 30%;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        span {
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    #modal-title {
        margin: auto 0px 30px;
    }

    #responses {
        margin-bottom: auto;
    }

    #responses span:first-child {
        margin-right: 80px;
    }

    #responses span {
        cursor: default;
    }

    @media (max-width: 768px) {
        #remove-modal {
            top: calc(50% - 10%);
            left: calc(50% - 45%);
            width: 90%;
            height: 20%;
        }
    }

</style>