<template>
    <header>
        <div class="ex-header">
            <h1 class="ex-header-logo"><nuxt-link to="/">Aoiblog</nuxt-link></h1>
        </div>
        <nav class="ex-nav">
            <ul class="container-wrap01">
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
        background-color: var(--bg-sub-color);
        -webkit-backdrop-filter: saturate(160%) blur(24px);
        backdrop-filter: saturate(160%) blur(24px);
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
        display: block;
        font-size: 2rem;
        text-decoration: none;
    }

    .ex-nav {
        border-top: solid 1px var(--fontC-sub-color);
        border-bottom: solid 1px var(--fontC-sub-color);
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
        width: 20%;
    }

    .ex-nav a {
        display: block;
        padding-top: 4px;
        padding-bottom: 4px;
        text-decoration: none;
    }
    
    .ex-nav a:hover,
    .ex-nav .nuxt-link-active {
        background-color: #00c58e;
        color: #fff;
    }
</style>