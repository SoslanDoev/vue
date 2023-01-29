<template>
    <aside class="aside" v-if="list.length > 0">
        <div class="aside__inner">
                <ul class="aside__list">
                    <li class="aside__item"
                        v-for="item in list"
                        :key="item.id"
                        :class="{'aside__item-active': item.name === actives}"
                    >
                        <a href="#" @click.prevent="actives = item.name, $emit('update', actives)" class="aside__item-link">
                            <span class="aside__item-text">{{ item.id }}</span>
                        </a>
                    </li>
                </ul>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'vAside',
        props: {
            // Входные параметры
            list: { // Список страниц
                type: Array,
            },
            active: {
                type: String,
            }
        },
        data() {
            return {
                actives: this.active,
            }
        }
    }
</script>

<style>
    .aside {
        position: absolute;
        left: 60px;
        top: 0;
        bottom: 0;
        display: flex;
        align-content: center;
        justify-content: center;
        min-height: 100vh;
        z-index: 50;
    }
    .aside::before {
        content: "";
        position: absolute;
        top: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(46,236,197,0.5) 20%, rgba(46,236,197,1) 50%, rgba(46,236,197,0.5) 80%, rgba(0,0,0,0.5) 100%);
        height: 100%;
        width: 5px;
        border-radius: 50px;
        bottom: 0;
        z-index: 5;
    }
    .aside__inner {
        position: relative;
        z-index: 10;
    }
    .aside__list {
        padding: 150px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .aside__item-active {
        flex: 1 0 auto;
    }
    .aside__item .aside__item-link{
        transition: var(--transition-default);
        background: linear-gradient(180deg, #5D7C76 0%, #0A3028 100%);
    }
    .aside__item-active .aside__item-link {
        background: linear-gradient(180deg, #B5FEEF 0%, #22A98D 100%);
        transition: var(--transition-default);
    }
    .aside__item-link {
        display: inline-block;
        width: 26px;
        height: 45px;
        border-radius: 9px;
        position: relative;
    }
    .aside__item-text {
        position: absolute;
        left: -25px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (max-width: 980px) {
        .aside {
            position: absolute;
            display: flex;
            align-content: center;
            justify-content: center;
            z-index: 50;
            min-height: 5px;
            width: 100%;
            top: initial;
            bottom: 0;
            left: 0;
        }
        .aside::before {
            display: none;
        }
        .aside__list {
            padding: 0;
            height: 0;
            gap: 30px;
            flex-direction: row;
        }
        .aside__item-link {
            width: 50px;
            height: 50px;
            border-radius: 50px;
            position: relative;
        }
        .aside__item-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>