<template>
    <div class="container-wrap01">
        <input v-model="search" placeholder="edit me">
        <p>search is: {{ search }}</p>
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
        <button @click="fetch" v-show="show">もっと見る</button>
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
import axios from 'axios'
export default {
    layout: 'blog', // ページコンポーネントの定義
    data() {
        return {
            title: 'ブログ | illustration',
            search: '',
            posts: "",
            count: 1,
            per_page: 6,
            show: true
        }
    },
    head () {
        return {
            // このページ向けにメタタグを設定します
            title: this.title,
        }
    },
    created() {
        axios.get(`https://aoiblog.org/wp-json/wp/v2/posts?_embed`, {
            params: {
                page: 1,
                per_page: this.per_page
            }
        }).then(response => {this.posts = response.data;
        }).catch(e => {
            return { error: e }
        })
    },
    methods: {
        fetch() {
            var countPlus = this.posts.length;
            this.count += 1;
            axios.get(`https://aoiblog.org/wp-json/wp/v2/posts?_embed`, {
            params: {
                    page: this.count,
                    per_page: 6
                }
            }).then(response => {
                Array.prototype.push.apply(this.posts,response.data);
                this.per_page += 6;
                console.log(this.per_page);
                this.posts.splice();
                if(this.posts.length == this.per_page) {
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }).catch(e => {
                return { error: e }
            })
        },
    }
}

</script>