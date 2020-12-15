<template>
    <div>
        <h2 class="works__title">{{pageTitle}}</h2>
        <div class="container-wrap01">
            <div class="works__search">
                <input v-model="search" placeholder="作品を検索する">
                <div class="works__search-list">
                    <button @click="searchClick('五等分の花嫁');">五等分の花嫁</button>
                    <button @click="searchClick('冴えない彼女の育てかた');">冴えない彼女の育てかた</button>
                    <button @click="searchClick('Webサイト');">Webサイト</button>
                </div>
            </div>
            <ul class="works__post-list">
                <li v-for="post in posts" :key="post.id" class="pworks__post-card">
                    <article>
                        <nuxt-link :to="'/works/entry/?slug='+post.id" :style="'background-image:url('+post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url+')'">
                            <h2 class="works__post-title">{{ post.title.rendered }}</h2>
                        </nuxt-link>
                    </article>
                </li>
            </ul>
            <p class="works__null" v-show="postSearch">作品が見つかりませんでした。</p>
            <button class="works__more" @click="fetch" v-show="show">作品を読みこむ</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
const pages = 8;
const wpApi = "https://logphoto.xsrv.jp/blog/entry/wp-json/wp/v2/works?_embed"
export default {
    props: ['pageTitle','parmSlug','parmTag'],
    watchQuery: ['works_category','works_tag','search'],
    data() {
        return {
            default: "制作実績",
            search: '',
            posts: "",
            pages: this.$route.query.pages,
            per_page: pages,
            works_category: this.$route.query.works_category,
            works_tag: this.$route.query.works_tag ,
            show: true,
            postSearch: false,
            slug: "",
        }
    },
    head () {
        return {
            title: this.pageTitle
        }
    },
    created() {
        this.pages = this.pages == undefined ? 1 : this.pages ;
        axios.get(`${wpApi}`, {
            params: {
                works_tag: this.works_tag,
                works_category: this.works_category,
                page: this.pages,
                per_page: pages
            }
        }).then(response => {this.posts = response.data;
        }).catch(error => {
            this.show = false;
            console.log(error)
        });

        if(this.works_category) {
            let querySlugCategory = this.works_category ? this.works_category : "0";
            axios.get(`https://logphoto.xsrv.jp/blog/entry/wp-json/wp/v2/works_category/${querySlugCategory}`, {
            }).then(response => {this.pageTitle = response.data.name;
            }).catch(error => {
                console.log(error)
            });
        }
        if(this.works_tag) {
            let querySlugTag = this.works_tag ? this.works_tag : "0";
            axios.get(`https://logphoto.xsrv.jp/blog/entry/wp-json/wp/v2/works_tag/${querySlugTag}`, {
            }).then(response => {this.pageTitle = response.data.name;
            }).catch(error => {
                console.log(error)
            });
        }
    },
    watch: {
        '$route' (to, from) {
            if(Object.keys(to.query).length == 0) {
                this.pages = 1;
                this.per_page = pages;
                this.show = true;
                this.postSearch = false;
                this.search = "",
                this.works_tag = "";
                this.works_category = "";
                this.pageTitle = this.default,
                axios.get(`${wpApi}`, {
                    params: {
                        page: 1,
                        per_page: this.per_page
                    }
                }).then(response => {this.posts = response.data;
                }).catch(error => {
                    this.show = false;
                    this.postSearch = true;
                    console.log(error)
                });
            }
        },
        search: function (value) {
            if(this.search != "") {
                this.works_tag = "";
                this.works_category = "";
                this.pages = 1;
                this.per_page = pages;
                axios.get(`${wpApi}`, {
                    params: {
                        works_tag: this.works_tag,
                        works_category: this.works_category,
                        search: this.search,
                        page: 1,
                        per_page: this.per_page
                    }
                }).then(response => {
                    this.posts = response.data;
                    this.show = true;
                    this.pageTitle = this.search;
                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            search: this.search,
                            pages: this.pages
                        }
                    });
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
            }
        }
    },
    methods: {
        fetch() {
            var pagesPlus = this.posts.length;
            this.pages++;

            axios.get(`${wpApi}`, {
                params: {
                    works_tag: this.works_tag,
                    works_category: this.works_category,
                    search: this.search,
                    page: this.pages,
                    per_page: pages
                }
            }).then(response => {
                Array.prototype.push.apply(this.posts,response.data);
                var palmReplace = 0;
                if(this.$route.query.search) { palmReplace = 1; }
                if(this.$route.query.works_category) { palmReplace = 2; }
                if(this.$route.query.works_tag) { palmReplace = 3; }
                this.per_page += pages;
                this.posts.splice();
                switch(palmReplace) {
                    case 3:
                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            works_tag: this.works_tag,
                            pages: this.pages
                        }
                    });
                    break;

                    case 2:
                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            works_category: this.works_category,
                            pages: this.pages
                        }
                    });
                    break;

                    case 1:
                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            search: this.search,
                            pages: this.pages
                        }
                    });
                    break;

                    case 0:
                    this.$router.replace({
                        path: this.$route.path,
                        query: {
                            pages: this.pages
                        }
                    });
                    break;
                }

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
        },
        queryLink() {
            this.$router.go({ path:'/blog', query: { works_category: this.$route.query.works_category } });
        }

    }
}
</script>

<style scoped>
    .works__title {
        background: var(--bg-accent-color);
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
        background-color: var(--bg-input-color);
        border: solid 1px;
        color: var(--fontC-sub-color);
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
        background-color: #efefef;
        color: #464242;
        font-size: 1.2rem;
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
        position: relative;
        width: 100%;
    }

    .works__post-title {
        background-color: rgba(0,0,0,0.6);
        color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1;
        opacity: 0;
        padding: 8px 16px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.4s ease;
        -webkit-transition: all 0.4s ease;
    }

    .works__post-list li a:hover .works__post-title {
        opacity: 1;
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
            font-size: 1.4rem;
        }
        .works__post-list li {
            width: 25%;
        }
    }
</style>
