<template>

    <div>
        <h1>Apostolos Papazisis</h1>
        <p class="lead" v-html="$t('home.introduction')"/>
    </div>

</template>

<script>

    export default {

        head() {
            return {
                title: this.$t('home.title')
            }
        },

        async fetch({ store }) {
            store.commit('SET_PAGE', 'home');
        },

    }
</script>
