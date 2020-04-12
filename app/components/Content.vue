<template>

    <div>
        <navigation />
        <div>
            <slot/>
        </div>
    </div>

</template>

<script>
    import Navigation from "../components/Navigation";

    export default {

        components: {
            Navigation
        }
    }
</script>
