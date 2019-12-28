<template>
    <div>
        <Header/>
        <div>ブログのナビゲーションバーをここに設置します</div>
        <nuxt/>
        <Footer/>
    </div>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
    components: {
        Header,
        Footer
    },
}
</script>