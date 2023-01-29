<template>
    <input type="text" class="input__grey" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .input__grey {
        background: rgba(255, 255, 255, 0.1);
        border: 1.5px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 38px rgba(255, 255, 255, 0.05);
        border-radius: 41px;
        padding: 10px;
        color: var(--clr-white);
        outline: none;
        font-size: 1.075rem;
    }
</style>