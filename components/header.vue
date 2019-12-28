<template>
    <header>
        <div class="container-wrap01">
            <p>ヘッダーが入ります。ヘッダーが入ります。ヘッダーが入ります。ヘッダーが入ります。</p>
        </div>
        <nav class="ex-nav">
            <ul class="container-wrap01">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                <li><nuxt-link to="/work">Work</nuxt-link></li>
                <li><nuxt-link to="/profile">Profile</nuxt-link></li>
                <li><nuxt-link to="/faq">Faq</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
	export default {};
</script>

<style>
    .ex-nav {
        padding-top: 16px;
        padding-bottom: 16px;
    }
    
    .ex-nav ul {
        display: flex;
        display: -webkit-flex;
        list-style: none;
    }

    .ex-nav li {
        box-sizing: border-box;
        margin-left: 8px;
        margin-right: 8px;
        text-align: center;
        width: 16.66666666666667%;
    }

    .ex-nav a {
        border-bottom: solid 2px #ddd;
        display: block;
        text-decoration: none;
    }

    .ex-nav .nuxt-link-exact-active {
        border-color: #00c58e;
        color: #00c58e;
    }
</style>