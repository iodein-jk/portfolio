<template>
    <div class="home">
        <div class="container-wrap01 home-main">
            <div class="column2-left-golden-main">
                <div class="frame-wrapper__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6VjLdCrS7nI?rel=0&autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

<style scoped>
    .frame-wrapper__video {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        overflow: hidden;
        margin-bottom: 50px;
    }

    .frame-wrapper__video iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .home-nav {
        padding-left: 24px;
        padding-right: 24px;
    }

    .home-nav ul {
        list-style: none;
    }

    .home-nav ul li:not(:first-child) {
        margin-top: 16px;
    }

    .home-nav a {
        display: block;
        font-size: 1.6rem;
        margin-bottom: 4px;
        line-height: 1;
    }

    .home-nav p {
        color: var(--fontC-sub-color);
        font-size: 1.28rem;
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
        .home-nav {
            padding-left: 32px;
        }
    }
</style>
