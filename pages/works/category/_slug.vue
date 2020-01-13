<template>
    <div>
        <worksArchive :parmSlug="slug" :pageTitle="titleName.name"/>
    </div>
</template>
<script>
import worksArchive from "@/components/works_archive.vue";
import axios from 'axios'
export default {
    layout: 'works', // ページコンポーネントの定義
    data() {
        return {
            titleName: "",
            slug: {}
        }
    },
    components: {
        worksArchive,
    },
    asyncData ({ params }) {
        //c¥¥onsole.log(params.slug);
        return { slug : params.slug };
    },
    created() {
        axios.get(`https://aoiblog.org/blog/entry/wp-json/wp/v2/works_category/${this.slug}`, {
        }).then(response => {this.titleName = response.data;
        }).catch(error => {
            console.log(error)
        });
    },
}


</script>

<style Scoped>

</style>