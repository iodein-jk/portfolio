<template>
    <div class="works">
        <worksArchive/>
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

<style Scoped>
    .works__title {
        background: #fafafa;
        font-weight: 500;
        padding-top: 36px;
        padding-bottom: 36px;
        text-align: center;
    }
</style>
