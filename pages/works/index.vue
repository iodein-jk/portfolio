<template>
    <div>
        <worksArchive pageTitle="制作実績"/>
    </div>
</template>
<script>
import worksArchive from "@/components/works_archive.vue";

export default {
    layout: 'works', // ページコンポーネントの定義
    components: {
        worksArchive,
    },
}
</script>

<style scoped>

</style>