<template>
    <div class="check_in-page">
        <div class="contact-title">Регистрация</div>
        <form action="">
            <input class="name-input" type="text" placeholder="ИМЯ">
            <input class="surname-input" type="text" placeholder="ФАМИЛИЯ">
            <input class="mail-input" type="text" placeholder="EMAIL">
            <input class="pass-input" type="text" placeholder="ПАРОЛЬ">
            <router-link class="form-btn" to="/reg"><span>Регистрация</span></router-link>
        </form>

    </div>
</template>

<script>
    import {TweenMax} from 'gsap'

    export default {
        name: 'check_in',

    }
</script>
