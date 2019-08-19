<template>
    <div>
        <v-app-bar
                fixed
                dark
                scroll-target="#app"
        >
            <v-avatar :tile="true" width="65" class="floating">
                <img src="/img/astronaut-white.png" alt="humanfly">
            </v-avatar>

            <v-toolbar-title class="ml-2">Humanfly</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>info</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>fas fa-bicycle</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data: () => ({
        }),
    }
</script>

<style>
    .floating {
        animation-name: floating;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        margin-top: -10px;
    }

    @keyframes floating {
        from { transform: translate(0,  0px); }
        65%  { transform: translate(0, 10px); }
        to   { transform: translate(0, -0px); }
    }
</style>