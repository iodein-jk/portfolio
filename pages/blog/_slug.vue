<template>
    <div class="container-wrap01">
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id" class="post-card">
                <article>
                     <h2 class="subtitle"><a :href="post.link">{{ post.title.rendered }}</a></h2>
                    <div class="info" v-html="post.excerpt.rendered"></div>
                </article>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout: 'blog', // ページコンポーネントの定義
    data() {
        return {
            title: 'ブログ | illustration',
            message: '',
            posts: {}
        }
    },
    head () {
        return {
            // このページ向けにメタタグを設定します
            title: this.title,
        }
    },
    asyncData ({ params }) {
        return axios.get(`https://aoiblog.org/wp-json/wp/v2/posts?_embed&categories=${params.slug}`, {
            params: {
                page: 1,
                per_page: 5,
            }
        }).then(json => {
            return { posts: json.data }
        }).catch(e => {
            return { error: e }
        })
    }
    
}
</script>