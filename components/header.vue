<template>
    <header>
        <div class="ex-header">
            <h1 class="ex-header-logo"><nuxt-link to="/">Aoiblog</nuxt-link></h1>
        </div>
        <nav class="ex-nav">
            <ul class="container-wrap01">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                <li><nuxt-link to="/works">Works</nuxt-link></li>
                <li><nuxt-link to="/profile">Profile</nuxt-link></li>
                <li><a href="https://www.youtube.com/channel/UCciSDSgF9XQmSPoH2YtE50g?view_as=subscriber" target="_blank">Youtube</a></li>
                <li><a href="https://twitter.com/iodein_jk" target="_blank">Twitter</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
	export default {};
</script>

<style Scoped>
    .ex-header {
        background-color: rgba(255,255,255,.7);
        -webkit-backdrop-filter: saturate(160%) blur(24px);
        backdrop-filter: saturate(160%) blur(24px);
        background-color: hsla(0,0%,100%,.7);
        font-size: 20px;
        font-weight: bold;
        padding: 12px;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
    }

    .ex-header-logo {
        line-height: 1;
        margin: 0;
    }

    .ex-header a {
        color: #333;
        display: block;
        font-size: 20px;
        text-decoration: none;
    }

    .ex-nav {
        border-top: solid 1px #ddd;
        border-bottom: solid 1px #ddd;
        margin-top: 44px;
    }
    
    .ex-nav ul {
        display: flex;
        display: -webkit-flex;
        list-style: none;
    }

    .ex-nav li {
        box-sizing: border-box;
        text-align: center;
        width: 16.66666666666667%;
    }

    .ex-nav a {
        display: block;
        padding-top: 6px;
        padding-bottom: 6px;
        text-decoration: none;
    }
    
    .ex-nav a:hover,
    .ex-nav .nuxt-link-active {
        background-color: #00c58e;
        color: #fff;
    }
</style>