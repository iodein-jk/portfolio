<template>
    <div>
        {{ slug }}
        <blogArchive :parmSlug="slug"/>
    </div>
</template>
<script>
import blogArchive from "@/components/blog_archive.vue";

export default {
    data() {
        return {
            slug: {}
        }
    },
    components: {
        blogArchive,
    },
    asyncData ({ params }) {
        //console.log(params.slug);
        return { slug : params.slug };
    },
}


</script>

<style Scoped>

</style>