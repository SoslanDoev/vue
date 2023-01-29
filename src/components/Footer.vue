<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <h5 class="footer__title">© 2019–2022, WEB Studio - Разработка сайтов для предприятий</h5>
                <p class="footer__text">Политика сайта и обработка персональных данных</p> 
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'vFooter',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .footer__inner {
        padding: 10px 0 40px;
        text-align: center;
    }
    .footer__title {
        color: var(--clr-white-rgba);
        margin: 0 0 20px 0;
        font-size: 0.9375rem;
    }
    .footer__text {
        color: rgba(255, 255, 255, .4);
        font-size: 0.8125rem;
    }
</style>