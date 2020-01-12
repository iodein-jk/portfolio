<template>
    <div>
        <blogArchive pageTitle="ブログ"/>
    </div>
</template>
<script>
import blogArchive from "@/components/blog_archive.vue";

export default {
    layout: 'blog', // ページコンポーネントの定義
    components: {
        blogArchive,
    },
}
</script>

<style scoped>

</style>