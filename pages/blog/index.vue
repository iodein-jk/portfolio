<template>
    <div class="container-wrap01">
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id" class="post-card">
                <article>
                    <figure><a :href="post.link"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url" :width="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.width" :height="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.height" :alt="post.title.rendered"></a></figure>
                    <h2 class="subtitle"><a :href="post.link">{{ post.title.rendered }}</a></h2>
                    <p>{{ post.date }}</p>
                </article>
            </li>
        </ul>
    </div>
</template>
<style Scoped>
    .post-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    .post-list li {
        box-sizing: border-box;
        padding: 12px;
        width: 33.33333%;
    }

    .post-list figure {
        line-height: 1;
        margin-bottom: 4px;
    }

    .post-list h2 {
        font-size: 16px;
        font-weight: 500;
    }

    .post-list a {
        text-decoration: none;
    }

    .post-list p {
        font-size: 12px;
    }
</style>
<script>
///import wp from '@/assets/js/wp.js';
import axios from 'axios'
class WpApi {
    // コンストラクタ
    constructor (siteurl) {
        this.apiBase = `${siteurl}/wp-json`;
    }

    posts () {
        return axios.get(`${this.apiBase}/wp/v2/posts?_embed`, {
        params: {
            page: 1,
            per_page: 5
        }
        }).then(json => {
            return { posts: json.data }
        }).catch(e => {
            return { error: e }
        })
    }
}

export default {
    layout: 'blog', // ページコンポーネントの定義
    data() {
        return {
            title: 'ブログ | illustration',
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
        const wp = new WpApi("https://aoiblog.org");
        return wp.posts();
    }
    
}
</script>