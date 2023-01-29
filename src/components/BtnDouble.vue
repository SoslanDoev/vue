<template>
    <button class="double__btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BtnDouble',
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .double__btn {
        position: relative;
        display: block;
        background-color: var(--clr-black);
        color: var(--clr-white);
        border: 1.5px solid var(--clr-green-neon);
        box-shadow: 0px 0px 38px rgba(46, 236, 197, 0.2);
        border-radius: 4px;
        padding: 15px 43px;
        cursor: pointer;
        transition: var(--transition-default);
    }
    .double__btn:hover {
        transition: var(--transition-default);
        color: var(--clr-green-neon);
    }
    .double__btn:hover::after{
        background-color: var(--clr-green-neon);
    }
    .double__btn::after {
        transition: var(--transition-default);
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 10px;
        left: 10px;
        background-color: inherit;
        border: inherit;
        border-radius: inherit;
        padding: inherit;
        z-index: -1;
    }
</style>