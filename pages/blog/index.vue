<template>
    <div class="container-wrap01">
        <nuxt-link to="/">Homeに戻る</nuxt-link>
    </div>
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