<template>
    <div>
        <h2 class="archive__title">{{pageTitle}}</h2>
        <div class="container-wrap01">
            <div class="archive__search">
                <input v-model="search" placeholder="記事を検索する">
                <div class="archive__search-list">
                    <button @click="searchClick('Wordpress');">Wordpress</button>
                    <button @click="searchClick('Web');">Web</button>
                    <button @click="searchClick('イラスト');">イラスト</button>
                    <button @click="searchClick('雑記');">雑記</button>
                </div>
            </div>
            <ul class="archive__post-list">
                <li v-for="post in posts" :key="post.id" class="parchive__post-card">
                    <article>
                        <figure><a :href="post.link"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url" :width="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.width" :height="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.height" :alt="post.title.rendered"></a></figure>
                        <h2 class="archive__post-title"><a :href="post.link">{{ post.title.rendered }}</a></h2>
                        <div class="archive__post-infomation">
                            <p><nuxt-link :to="'/blog/category/'+post._embedded['wp:term'][0][0].id">{{ post._embedded['wp:term'][0][0].name }}</nuxt-link></p>
                            <p class="archive__post-date">{{ post.date }}</p>
                        </div>
                    </article>
                </li>
            </ul>
            <p class="archive__null" v-show="postSearch">記事が見つかりませんでした。</p>
            <button class="archive__more" @click="fetch" v-show="show">ブログを読みこむ</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
const pages = 9;
const wpApi = "https://aoiblog.org/blog/entry/wp-json/wp/v2/posts?_embed"
export default {
    props: ['pageTitle','parmSlug','parmTag'],
    data() {
        return {
            title: ' | Aoiblog',
            search: '',
            posts: "",
            count: 1,
            per_page: pages,
            category: this.parmSlug,
            tag: this.parmTag ,
            show: true,
            postSearch: false,
            slug: "",
        }
    },
    head () {
        return {
            title: this.pageTitle+this.title
        }
    },
    created() {
        axios.get(`${wpApi}`, {
            params: {
                tags: this.tag,
                categories: this.category,
                page: 1,
                per_page: pages
            }
        }).then(response => {this.posts = response.data;
        }).catch(error => {
            this.show = false;
            console.log(error)
        });
    },
    watch: {
        search: function (value) {
            if(this.search != "") {
                this.tag = "";
                this.category = "";
            }
            else {
                this.tag = this.parmTag;
                this.category = this.parmSlug;
            }
            this.count = 1;
            this.per_page = pages;
            axios.get(`${wpApi}`, {
                params: {
                    tags: this.tag,
                    categories: this.category,
                    search: this.search,
                    page: 1,
                    per_page: this.per_page
                }
            }).then(response => {
                this.posts = response.data;
                this.show = true;
                if(this.posts.length == 0) {
                    this.show = false;
                    this.postSearch = true;
                }
                else if(this.posts.length < pages) {
                    this.show = false;
                    this.postSearch = false;
                }
                else {
                    this.show = true;
                    this.postSearch = false;
                }
            }).catch(error => {
                console.log(error)
            });
        },
    },
    methods: {
        fetch() {
            var countPlus = this.posts.length;
            this.count += 1;

            axios.get(`${wpApi}`, {
                params: {
                    tags: this.tag,
                    categories: this.category,
                    search: this.search,
                    page: this.count,
                    per_page: pages
                }
            }).then(response => {
                Array.prototype.push.apply(this.posts,response.data);
                this.per_page += pages;
                this.posts.splice();
                if(this.posts.length == this.per_page) {
                    this.show = true;
                }
                else {
                    this.show = false;
                }
            }).catch(error => {
                this.show = false;
                this.postSearch = true;
                console.log(error)
            })
        },
        searchClick(words) {
             this.search = words;
        }
        
    }
}
</script>

<style scoped>
    .archive__title {
        background: var(--bg-sub-color);
        font-weight: 500;
        padding-top: 36px;
        padding-bottom: 36px;
        text-align: center;
    }
    .archive__search {
        margin: 32px auto;
        max-width: 500px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .archive__search input {
        background-color: var(--bg-input-color);
        border: solid 1px;
        color: var(--fontC-main-color);
        font-size: 1.6rem;
        padding: 8px;
        width: 100%;
    }
    .archive__search-list {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        margin-top: 16px;
    }

    .archive__search-list button {
        background-color: var(--fontC-sub-color);
        color: #464242;
        font-size: 1.2rem;
        margin: 8px;
        padding: 6px 8px;
        line-height: 1;
    }
    .archive__post-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    .archive__post-list li {
        box-sizing: border-box;
        padding: 6px;
        width: 50%;
    }

    .archive__post-list figure {
        line-height: 1;
        margin-bottom: 4px;
    }

    .archive__post-title {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.3;
    }

    .archive__post-list a {
        text-decoration: none;
    }

    .archive__post-list p {
        opacity: 0.6;
        font-size: 1.2rem;
    }

    .archive__post-infomation {
        margin-top: 4px;
    }

    .archive__post-infomation p,
    .archive__post-infomation a {
        color: var(--fontC-sub-color);
        line-height: 1;
    }

    .archive__post-date {
        display: none;
    }

    .archive__null {
        text-align: center;
    }

    .archive__more {
        background-color: #006ac5;
        border-radius: 0.8em;
        color: #fff;
        display: block;
        font-size: 1.6rem;
        margin-top: 24px;;
        margin-left: auto;
        margin-right: auto;
        line-height: 1;
        padding: 16px 24px;
        text-align: center;
        width: 1８0px;
    }

    @media (min-width: 740px) {
        .archive__search-list button {
            font-size: 1.4rem;
        }

        .archive__post-list li {
            padding: 12px;
            width: 33.33333%;
        }
        .archive__post-title {
            font-size: 1.6rem;
            line-height: 1.4;
        }
        .archive__post-infomation {
            display: flex;
            display: -webkit-flex;
        }

        .archive__post-list p {
            opacity: 1;
        }

        .archive__post-date {
            display: block;
            line-break: 1;
        }

        .archive__post-infomation p + p {
            margin-left: 1em;
        }
    }
</style>