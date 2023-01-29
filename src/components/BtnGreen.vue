<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BtnGreen',
    }
</script>

<style>
    .btn {
        background-color: var(--clr-green-rgba);
        padding: 18px 40px;
        box-shadow: 0px 0px 62px rgba(46, 236, 197, 0.15);
        border-radius: 50px;
        color: var(--clr-white);
        border: 1.5px solid var(--clr-green-neon);
        cursor: pointer;
        transition: var(--transition-default);
    }
    .btn:hover {
        transition: var(--transition-default);
        color: var(--clr-green);
        box-shadow: 0px 0px 80px rgba(44, 44, 45, 0.35);
    }
    /* media */
    @media screen and (max-width: 750px) {
        .btn {padding: 10px 20px;}
    }
    /* media */
</style>