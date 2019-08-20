<template>
    <div>
        <v-app-bar
                fixed
                dark
                scroll-target="#app"
        >
            <a href="/">
                <v-avatar :tile="true" width="65" class="floating" href="/">
                    <img src="/img/astronaut-white.png" alt="humanfly">
                </v-avatar>
            </a>

            <v-toolbar-title class="ml-2" href="/">Humanfly</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon
                   href="/films">
                <v-icon>fas fa-film</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>fas fa-bicycle</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>info</v-icon>
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