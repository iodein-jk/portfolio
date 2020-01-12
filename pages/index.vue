<template>
    <div class="home">
        <div class="container-wrap01 home-main">
            <div class="column2-left-golden-main">
                <div>
                    <img src="http://placehold.jp/618x400.png" alt="">
                </div>
            </div>
            <div class="column2-right-golden-side">
                <nav class="home-nav">
                    <ul class="container-wrap01">
                        <li>
                            <nuxt-link to="/blog">Blog</nuxt-link>
                            <p>制作日記や日常などの記事の一覧です</p>
                        </li>
                        <li>
                            <nuxt-link to="/work">Work</nuxt-link>
                            <p>カテゴリー別に制作実績を紹介しています</p>
                        </li>
                        <li>
                            <nuxt-link to="/profile">Profile</nuxt-link>
                            <p>自己紹介です</p>
                        </li>
                        <li>
                            <nuxt-link to="/faq">Faq</nuxt-link>
                            <p>制作依頼等をお送りいただける場合に質問いただいた内容を掲載しています</p>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Contact</nuxt-link>
                            <p>お問い合わせフォームです</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {}
}
</script>

<style Scoped>
    .home {
        margin-top: 48px;
    }
    
    .home-nav {
        padding-left: 32px;
    }

    .home-nav ul {
        list-style: none;
    }

    .home-nav ul li:not(:first-child) {
        margin-top: 16px;
    }

    .home-nav p {
        font-size: 1.4rem;
    }

    @media (min-width: 748px) {
        .home-main {
            display: flex;
            display: -webkit-flex;
            display: -ms-flex;
        }
    }
</style>
