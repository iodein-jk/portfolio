<template>
<nuxt-link to="/">Homeに戻る</nuxt-link>
</template>
<script>
export default {
    layout: 'blog', // ページコンポーネントの定義
    data() {
        return {
            title: 'ブログ | illustration'
        }
    },
    head () {
        return {
            // このページ向けにメタタグを設定します
            title: this.title,
        }
    }
}
</script>