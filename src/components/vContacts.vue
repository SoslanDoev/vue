<template>
    <div class="contacts__content">
        <ul class="contacts__list">
            <li
                class="contacts__item"
                v-for="item in $store.state.contacts"
                :key="item.id"
            >
                <a class="contacts__item-link" :href="item.url" :style="{ 'background-image': 'url(' + require(`@/assets/image/icon/${item.path_image}` ) + ')' }"></a>
        </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'vContacts',
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .contacts__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;
    }
    .contacts__item {
        background-color: var(--clr-white);
        border-radius: 50%;
        position: relative;
        transition: var(--transition-default);
    }
    .contacts__item:hover {
        transition: var(--transition-default);
        background-color: var(--clr-green);
        transform: scale(1.2);
    }
    .contacts__item-link {
        width: 90px;
        height: 85px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 50%;
        padding: 10px;
        display: inline-block;
    }
    .contacts__item::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 110px;
        height: 110px;
        border: 2px solid var(--clr-white);
        border-radius: 50%;
        z-index: -1;
    }
    @media screen and (max-width: 980px) {
        .contacts__list {gap: 25px;}
        .contacts__item-link {
            width: 45px;
            height: 40px;
        }
        .contacts__item::before {
            width: 60px;
            height: 60px;
        }
    }
</style>