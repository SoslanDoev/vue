<template>
    <RouterLink to="/home" class="header__logo logo">
        <span class="header__logo-title logo__title">STUDIO</span> 
        <span class="header__logo-text logo__text">WEB</span> 
    </RouterLink>
</template>

<script>
    export default {
        name: 'vLogo'
    }
</script>

<style scoped>
    .logo {
        text-transform: uppercase;
        display: inline-flex;
        flex-direction: column;
        transition: var(--transition-default);
    }
    .logo:hover {
        transition: var(--transition-default);
        color: var(--clr-green-neon);
    }
    .logo__title {
        display: inline-flex;
        letter-spacing: 5px;
        font-family: var(--font-bold);
        margin: 0 0 5px 0;
    }
    .logo__text {
        font-size: 2.5rem;
        /* line-height: 1rem; */
        font-family: var(--font-extrabold);
        letter-spacing: -4px;
    }
</style>