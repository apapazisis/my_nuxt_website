<template>
    <container>
        <app-content>
            <nuxt/>
        </app-content>
    </container>
</template>

<script>
    import Container from "../components/Container";
    import AppContent from "../components/Content";

    export default {

        components: {
            AppContent,
            Container,
        }

    }
</script>
