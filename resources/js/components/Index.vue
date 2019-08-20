<template>
    <v-parallax
            dark
            src="../img/fivePoints.jpg"
            height="1080"
    >
        <v-expand-transition>
            <v-row
                    v-show="showTitle"
                    align="center"
                    justify="center"
            >
                <div class="display-2 font-weight-light font-italic light-grey">Humanfly</div>
            </v-row>
        </v-expand-transition>

        <v-row
                align="center"
                justify="center"
        >
            <h2 class="subheading">Free your mind !</h2>
        </v-row>
    </v-parallax>
</template>

<script>
    export default {
        data: () => ({
            showTitle: false
        }),
        mounted() {
            setTimeout(()=> {
                this.showTitle = true;
            }, 1000);
        }
    }
</script>
