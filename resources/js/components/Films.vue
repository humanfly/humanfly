<template>
    <div class="pt-3 pl-5 pr-5">
        <v-app-bar
                dense
                :tile="false"
                scroll-target="#films"
        >
            <v-text-field
                    hide-details
                    prepend-icon="search"
                    single-line
                    v-model="query"
                    placeholder="Search for Movies, TV-shows ..."
            ></v-text-field>

            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-app-bar>

        <div id="films" class="p-5">
            <v-card
                    v-for="item in items"
                    :key="item.id"
                    class="film-card"
            >
                <v-img
                        :class="`${item.poster_path ? 'film-card-poster':'no-image-holder'}`"
                        :src="item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : ''"
                >
                    <v-card-title v-if="item.poster_path" class="align-end fill-height">
                        {{ item.title ? item.title : item.name }}
                        ({{ item.release_date ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}})
                    </v-card-title>
                    <v-icon v-else size="180" class="mt-5">far fa-image</v-icon>
                </v-img>

                <v-card-text class="film-card-content">
                    <span><v-icon class="mb-1 mr-1 orange--text">far fa-star</v-icon>{{ item.vote_average }}</span><br>
                    <span class="text--primary">
                        <v-tooltip max-width="300" top>
                            <template v-slot:activator="{ on }">
                                <span v-on="on">{{ item.overview }}</span>
                            </template>
                            <span>{{ item.overview }}</span>
                        </v-tooltip>
                  </span>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            text
                            color="orange"
                    >
                        Share
                    </v-btn>
                    <v-btn
                            text
                            color="orange"
                    >
                        Explore
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-pagination
                    v-show="items.length"
                    v-model="page"
                    :length="totalPages"
                    :total-visible="7"
                    @input="toPage"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import helper from '../helper'
    import api from '../api'

    export default {
        data: () => ({
            items: [],
            page: 0,
            totalPages: 0,
            query: ''
        }),
        watch: {
            query () {
                this.search();
            }
        },
        methods: {
            toPage(page) {
                this.search(page);
            },
            search: _.debounce(function(page){
                // No query string
                if (this.query.length === 0) return;

                const uri = helper.combineUri(`/api/films/search-multiple`, {
                    query : this.query,
                    page: page ? page : 1
                });

                api.get(uri)
                    .then(res => {
                        this.page = res.data.page;
                        this.totalPages = res.data.total_pages;
                        this.items = res.data.results;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }, 500),
        }
    }
</script>
