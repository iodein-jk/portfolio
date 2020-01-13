<template>
    <div>
        <h2 class="works__title">{{pageTitle}}</h2>
        <div class="container-wrap01">
            <div class="works__search">
                <input v-model="search" placeholder="記事を検索する">
                <div class="works__search-list">
                    <button @click="searchClick('五等分の花嫁');">五等分の花嫁</button>
                    <button @click="searchClick('冴え');">冴え</button>
                    <button @click="searchClick('Webサイト');">Webサイト</button>
                </div>
            </div>
            <ul class="works__post-list">
                <li v-for="post in posts" :key="post.id" class="pworks__post-card">
                    <article>
                        <a :href="'/works/entry/'+post.id" :style="'background-image:url('+post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url+')'">

                        </a>
                        <!-- <h2 class="works__post-title"><a :href="post.link">{{ post.title.rendered }}</a></h2>
                        <div class="works__post-infomation">
                            <p><nuxt-link :to="'/blog/category/'+post._embedded['wp:term'][0][0].id">{{ post._embedded['wp:term'][0][0].name }}</nuxt-link></p>
                            <p>{{ post.date }}</p>
                        </div> -->
                    </article>
                </li>
            </ul>
            <p class="works__null" v-show="postSearch">作品が見つかりませんでした。</p>
            <button class="works__more" @click="fetch" v-show="show">もっと見る</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
const pages = 9;
const wpApi = "https://aoiblog.org/blog/entry/wp-json/wp/v2/works?_embed"
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
                works_tag: this.tag,
                works_category: this.category,
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
                    works_tag: this.tag,
                    works_category: this.category,
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
                    works_tag: this.tag,
                    works_category: this.category,
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
    .works__title {
        background: #fafafa;
        font-weight: 500;
        padding-top: 36px;
        padding-bottom: 36px;
        text-align: center;
    }
    .works__search {
        margin: 32px auto;
        max-width: 500px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .works__search input {
        border: solid 1px #ccc;
        font-size: 1.6rem;
        padding: 8px;
        width: 100%;
    }
    .works__search-list {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        margin-top: 16px;
    }

    .works__search-list button {
        background-color: #fafafa;
        color: #464242;
        font-size: 12px;
        margin: 8px;
        padding: 6px 8px;
        line-height: 1;
    }
    .works__post-list {
        display: flex;
        display: -webkit-flex;
        flex-wrap: wrap;
        list-style-type: none;
    }

    .works__post-list li {
        width: 50%;
    }

    .works__post-list li a {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        width: 100%;
    }

    .works__post-list li a::before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    .works__post-list li img {
        object-fit: cover;
    }
    .works__more {
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
        width: 160px;
    }
    .works__null {
        text-align: center;
    }
    @media (min-width: 764px) {
        .works__search-list button {
            font-size: 14px;
        }
        .works__post-list li {
            width: 25%;
        }
    }
</style>