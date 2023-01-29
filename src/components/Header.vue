<template>
    <header class="header" v-if="$route.meta.Header === true">
        <div class="container">
            <div class="header__inner">
                <vLogo></vLogo>
                <nav class="header__menu menu">
                    <ul class="header__menu-list menu__list" v-if="menuPage.length > 0">
                        <li class="header__menu-item menu__item" v-for="item in menuPage" :key="item.id">
                            <RouterLink :to="item.href" class="header__menu-link">{{ item.name }}</RouterLink>
                        </li> 
                    </ul>
                </nav>
                <div class="header__button-box">
                    <BtnGreen class="button-green">Заказать</BtnGreen>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import vLogo from '@/components/vLogo.vue'
    export default {
    name: "vHeader",
    components: {
        vLogo,
    },
    data() {
        return {
            menuPage: [
                { id: 1, name: "Главная", href: "/" },
                // { id: 2, name: "Почему именно мы?", href: "/about" },
                // { id: 3, name: "Контакты", href: "/contacts" },
            ]
        };
    },
}
</script>

<style scoped>
    .header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
    }
    .header__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--header-padding) 0;
    }
    .header__menu-list {
        display: flex;
        gap: 35px;
    }
    .header__menu-link {
        transition: var(--transition-default);
    }
    .header__menu-link:hover {
        color: var(--clr-green);
        transition: var(--transition-default);
    }
    .menu__item > .router-link-active {
        position: relative;
        color: var(--clr-green);
    }
    .menu__item > .router-link-active::before {
        content: "";
        position: absolute;
        top: calc(-1 * var(--header-padding));
        transform: translate(0, -20px);
        width: 100%;
        height: 8px;
        background: var(--clr-green);
        border-radius: 5px;
        box-shadow: 0px 0px 21px rgba(44, 232, 194, 0.35);
    }
</style>