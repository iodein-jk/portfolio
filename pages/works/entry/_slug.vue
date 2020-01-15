<template>
    <div>
        <figure class="workssingle__image">
            <div class="container-wrap01"><img :src="posts._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" alt=""></div>
        </figure>
        <div class="container-wrap01">
            <div class="workssingle__outer">
                <div class="workssingle__left">
                    <div class="workssingle__infomation">
                        <h2 class="workssingle__title">{{ posts.title.rendered }}</h2>
                        <p class="workssingle__date">投稿日：{{ posts.date }}</p>
                        <p class="workssingle__category">カテゴリー：<nuxt-link :to="'/works/category/'+posts._embedded['wp:term'][0][0].id">{{ posts._embedded['wp:term'][0][0].name }}</nuxt-link></p>
                        <ul class="workssingle__tag">
                            <li v-for="postTag in posts._embedded['wp:term'][1]" :key="postTag.id">
                                <nuxt-link :to="'/works/tag/'+postTag.id">{{ postTag.name }}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="workssingle__right">
                    <div class="workssingle__content" v-html="posts.content.rendered"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            title: ' | Aoiblog',
            slug: {},
            posts: {},
            category: {}
        }
    },
    head () {
        return {
            title: this.posts.title.rendered+this.title
        }
    },
    components: {
    },
    asyncData ({ params }) {
        //c¥¥onsole.log(params.slug);
        return axios.get(`https://aoiblog.org/blog/entry/wp-json/wp/v2/works/${params.slug}?_embed`, {
        }).then(response => {return { posts: response.data }
        }).catch(error => {
            console.log(error)
        });
    },
    created() {
        axios.get(`https://aoiblog.org/blog/entry/wp-json/wp/v2/works_category/`, {
        }).then(response => {this.category = response.data;
        }).catch(error => {
            console.log(error)
        });
        console.log(this.category);
    },
}


</script>

<style>
.workssingle__image {
    background: var(--bg-sub-color);
    margin-bottom: 24px;
    text-align: center;
}

.workssingle__image img {
    max-height: 800px;
}

.workssingle__left,
.workssingle__right {
    padding: 12px;
}

.workssingle__title {
    font-size: 2rem;
    margin-bottom: 24px;
}

.workssingle__tag {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 12px;
}

.workssingle__tag a {
    border: solid 1px;
    display: block;
    font-size: 1.4rem;
    line-height: 1;
    padding: 8px;
    margin: 4px;
    text-decoration: none;
}

.workssingle__content h2,
.workssingle__content h3 {
    margin-top: 24px;
    margin-bottom: 16px;
}

.workssingle__content h2 {
    border-bottom: solid 2p;
    font-size: 2rem;
}

.workssingle__content h3 {
    font-size: 1.6rem;
}


@media (min-width:740px) {
    .workssingle__image {
        margin-bottom: 48px;
    }
    .workssingle__outer {
        display: flex;
        display: -webkit-flex;
    }

    .workssingle__left,
    .workssingle__right {
        box-sizing: border-box;
        padding: 0 32px 32px;
        width: 50%;
    }

    .workssingle__right {
        border-left: solid 1px #cdcdcd;
        position: relative;
    }

    .workssingle__infomation {
        position: sticky;
        top: 32px;
    }

    .workssingle__title {
        font-size: 3.6rem;
    }
}
</style>