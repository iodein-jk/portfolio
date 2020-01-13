<template>
    <div>
        <figure class="workssingle__image">
            <!-- <div class="container-wrap01"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" alt=""></div> -->
        </figure>
        <div class="container-wrap01">
            <h2>{{post.title.rendered}}</h2>
            <p><nuxt-link :to="'/blog/category/'+post._embedded['wp:term'][0][0].id">{{ post._embedded['wp:term'][0][0].name }}</nuxt-link></p>
            <p>{{ post.date }}</p>
            <pre>{{post}}</pre>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            slug: {},
            post: "",
        }
    },
    components: {
    },
    asyncData ({ params }) {
        //c¥¥onsole.log(params.slug);
        return { slug : params.slug };
    },
    created() {
        axios.get(`https://aoiblog.org/blog/entry/wp-json/wp/v2/works/${this.slug}?_embed`, {
        }).then(response => {this.post = response.data;
        }).catch(error => {
            console.log(error)
        });
    },
}


</script>

<style scoped>
.workssingle__image {
    background-color: #fafafa;
    margin-bottom: 48px;
}
</style>