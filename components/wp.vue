<template>
    
</template>
<script>
//import wp from '@/assets/js/wp.js';
import axios from 'axios'
class WpApi {
    // コンストラクタ
    constructor (siteurl,params) {
        this.apiBase = `${siteurl}/wp-json`;
        this.params  = `${params}`;
    }

    posts () {
        return axios.get(`${this.apiBase}/wp/v2/posts?_embed`, {
        params: {
            page: 1,
            per_page: 5
        }
        }).then(json => {
            return { posts: json.data }
        }).catch(e => {
            return { error: e }
        })
    }
}

const wp = new WpApi("https://aoiblog.org","");

export default wp
</script>