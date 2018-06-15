<template>
    <header class="class-header">
        <div class="header_logo" v-if="$root.isMobile">
            <a href="http://miz-group.com/"><img src="static/images/logo.png" alt="logo"></a>
        </div>
        <div class="header_text">
            <p>
                Динамично развивающаяся команда профессионалов, готовая к решению поставленных задач и созданию
                качественной веб- и мобильной инфраструктуры для локальных и международных брендов.
            </p>
        </div>
        <div class="header_logo" v-if="!$root.isMobile">
            <a href="http://miz-group.com/"><img src="static/images/logo.png" alt="logo"></a>
        </div>
    </header>
</template>

<script>
    import {TweenMax} from 'gsap'


    export default {
        name: 'Header',
    components: {
    },

    }
</script>
