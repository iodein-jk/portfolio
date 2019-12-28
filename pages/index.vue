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
                            <p>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</p>
                        </li>
                        <li>
                            <nuxt-link to="/work">Work</nuxt-link>
                            <p>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</p>
                        </li>
                        <li>
                            <nuxt-link to="/profile">Profile</nuxt-link>
                            <p>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</p>
                        </li>
                        <li>
                            <nuxt-link to="/faq">Faq</nuxt-link>
                            <p>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</p>
                        </li>
                        <li>
                            <nuxt-link to="/contact">Contact</nuxt-link>
                            <p>説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。</p>
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

<style>
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

