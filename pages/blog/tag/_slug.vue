<template>
    <div>
        <blogArchive :parmTag="slug" :pageTitle="titleName.name"/>
    </div>
</template>
<script>
import blogArchive from "@/components/blog_archive.vue";
import axios from 'axios'
export default {
    layout: 'blog', // ページコンポーネントの定義
    data() {
        return {
            titleName: "",
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
    created() {
        axios.get(`https://aoiblog.org/wp-json/wp/v2/tags/${this.slug}`, {
        }).then(response => {this.titleName = response.data;
        }).catch(error => {
            console.log(error)
        });
    },
}


</script>

<style Scoped>

</style>