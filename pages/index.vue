<template>
    <div class="home">
        <div class="container-wrap01 home-main">
            <div class="column2-left-golden-main">
                <div>
                    <img src="https://placehold.jp/618x400.png" alt="">
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
                            <nuxt-link to="/works">Work</nuxt-link>
                            <p>カテゴリー別に制作実績を紹介しています</p>
                        </li>
                        <li>
                            <nuxt-link to="/profile">Profile</nuxt-link>
                            <p>自己紹介です</p>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCciSDSgF9XQmSPoH2YtE50g?view_as=subscriber" target="_blank">Youtube</a>
                            <p>動画やライブ配信情報を一覧にしています。</p>
                        </li>
                        <li>
                            <a href="https://twitter.com/iodein_jk" target="_blank">Twitter</a>
                            <p>お問い合わせやご依頼はお手数ですがTwitterのDMより一度ご連絡の程よろしくお願いいたします。</p>
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

    .column2-left-golden-main {
        margin-bottom: 40px;
    }

    @media (min-width: 748px) {
        .home {
            margin-top: 48px;
        }
        .home-main {
            display: flex;
            display: -webkit-flex;
            display: -ms-flex;
        }
        .column2-left-golden-main {
            margin-bottom: 0;
        }
    }
</style>
