<template>
    <footer class="class-footer">

        <div class="center-block">
            <div class="copyrighted">
                <p>© 2017{{y}} ООО “MizGroup”</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import {TweenMax} from 'gsap'

    export default {
        name: 'Footer',
        data() {
            return {
                y: (+(new Date().getFullYear()) <= 2017) ? '' : '—' + new Date().getFullYear(),
                ok: 'asfas'
            }
        }
    }
</script>
