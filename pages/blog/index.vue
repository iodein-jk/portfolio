<template>
    <div class="container-wrap01">
        <ul class="archive__post-list">
            <li v-for="post in posts" :key="post.id" class="parchive__post-card">
                <article>
                    <figure><a :href="post.link"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url" :width="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.width" :height="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.height" :alt="post.title.rendered"></a></figure>
                    <h2 class="archive__post-title"><a :href="post.link">{{ post.title.rendered }}</a></h2>
                    <div class="archive__post-infomation">
                        <p>{{ post._embedded['wp:term'][0][0].name }}</p>
                        <p>{{ post.date }}</p>
                    </div>
                </article>
            </li>
        </ul>
        <button @click="fetch">追加</button>
        <p>{{ length }}件 fetch しました</p>
    </div>
</template>
<style Scoped>
    .archive__post-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    .archive__post-list li {
        box-sizing: border-box;
        padding: 12px;
        width: 33.33333%;
    }

    .archive__post-list figure {
        line-height: 1;
        margin-bottom: 4px;
    }

    .archive__post-title {
        font-size: 16px;
        font-weight: 500;
    }

    .archive__post-list a {
        text-decoration: none;
    }

    .archive__post-list p {
        font-size: 12px;
    }

    .archive__post-infomation {
        display: flex;
        display: -webkit-flex;
    }

    .archive__post-infomation p + p {
        margin-left: 1em;
    }

    @media (max-width: 764px) {
        .archive__post-list li { width: 50%; }
    }
</style>
<script>
///import wp from '@/assets/js/wp.js';
import axios from 'axios'
class WpApi {
    // コンストラクタ
    constructor (siteurl,category,page,per_page) {
        this.apiBase = `${siteurl}/wp-json`;
        this.page = `${page}`;
        this.per_page = `${per_page}`;
    }

    posts () {
        return axios.get(`${this.apiBase}/wp/v2/posts?_embed`, {
        params: {
            page: this.page,
            per_page: this.per_page
        }
        }).then(json => {
            this.page = this.page+1;
            return { posts: json.data }
        }).catch(e => {
            return { error: e }
        })
    }
}
let wp = new WpApi("https://aoiblog.org","",1,9);

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
        return wp.posts();
    },
    created() {

    },
    methods: {
        fetch() {
            
        }
    },
    computed: {
        length() {
            return this.posts.length
        }
    }
}
    
</script>