<template>
    <div class="wrapper">
        <!-- Sidebar -->
        <!-- Sidebar -->
        <div class="wrapper__content" style="position: relative;">
            <div class="container">
                <vAside :list="section" @update="updateActive" :active="sectionActive"></vAside>
            </div>
            <Transition name="fade" mode="out-in">
                <!-- Главная -->
                <section class="hero bg" v-if="sectionActive === 'hero'" :style="{ backgroundImage: 'url(' + require('@/assets/image/about/bg.svg') + ')' }">
                    <div class="container">
                        <div class="hero__inner">
                            <div class="hero__content">
                                <h1 class="hero__title title main__title">РАЗРАБОТКА САЙТОВ 
                                    <span class="hero__subtitle subtitle main__subtitle">ДЛЯ ТВОЕГО БИЗНЕСА</span>
                                </h1>
                                <p class="hero__text">
                                    Мы - студия web-разработки, работаем уже более 3-х лет, готовы разработать для вас сайт в кротчайшие сроки.
                                </p> 
                                <div class="hero__info">
                                    <BtnGreen class="hero__info-btn">Подробнее</BtnGreen>
                                    <a href="#" class="hero__link link">Остались вопросы?</a>
                                </div>
                            </div>
                            <div class="hero__image-box">
                                <img src="@/assets/image/hero/man.png" class="hero__image" alt="Изображение человека">
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Главная -->
                <!-- О нас -->
                <section class="about bg" v-else-if="sectionActive === 'about'" :style="{ backgroundImage: 'url(' + require('@/assets/image/about/bg.svg') + ')' }">
                    <div class="container">
                        <div class="about__inner">
                            <div class="about__item about__item-text">
                                <h2 class="about__title title">Причины сотрудничать с нами</h2>
                                <p class="about__text">Пока конкуренты говорят о том, что они лучшие - мы это доказываем делом.</p> 
                                <p class="about__text">Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио</p> 
                                <BtnDouble class="about__button">Портфолио</BtnDouble>
                            </div>
                            <div class="about__item about__item-card">
                                <div class="about__card">
                                    <h3 class="about__card-title">Приемлимые цены</h3>
                                    <p class="about__card-text">Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными</p> 
                                </div>
                            </div>
                            <div class="about__item about__item-card">
                                <div class="about__card">
                                    <h3 class="about__card-title">В сроки сдаем работу!</h3>
                                    <p class="about__card-text">Расписываем каждый этап по срокам, и придерживаемся дедлайнов</p> 
                                </div>
                            </div>
                            <div class="about__item about__item-card">
                                <div class="about__card">
                                    <h3 class="about__card-title">Команда специалистов</h3>
                                    <p class="about__card-text">В нашей команде множество специалистов, и каждый из них хорошо знает свое дело</p> 
                                </div>
                            </div>
                            <div class="about__item about__item-card">
                                <div class="about__card">
                                    <h3 class="about__card-title">Консультация перед заказом</h3>
                                    <p class="about__card-text">Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- О нас -->
                <!-- Портфолио -->
                <section class="portfolio bg" v-else-if="sectionActive === 'portfolio'" :style="{ backgroundImage: 'url(' + require('@/assets/image/portfolio/bg.svg') + ')' }">
                    <div class="portfolio">
                        <div class="container">
                            <div class="portfolio__inner">
                                <div class="portfolio__info">
                                    <h2 class="portfolio__title title">Наше портфолио</h2> 
                                    <p class="portfolio__text">В данном портфолио вы сможете увидеть кейсы наших работ на 2022 - 2023 год</p>
                                    <BtnGreen class="portfolio__btn">Компьютерные версии</BtnGreen>
                                </div>
                                <div class="portfolio__content">
                                    <vCarousel :slider=sliders></vCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Портфолио -->
                <!-- Тарифы -->
                <section class="rates bg" v-else-if="sectionActive === 'rates'">
                    <div class="rates">
                        <div class="container">
                            <div class="rates__inner">
                                <h2 class="rates__title title">Тарифы</h2> 
                                <div class="rates__content">
                                    <vSliderCoverflow :slider="tarrifsList"></vSliderCoverflow>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Тарифы -->
            </Transition>
        </div>
        <!-- Форма -->
        <section class="application">
            <div class="container">
                <div class="application__inner">
                    <h2 class="application__title title">Оставь заявку</h2>
                    <div class="application__content">
                        <div class="application__form">
                            <div class="application__form-item">
                                <div class="application__form-box">
                                    <label :for="form.fio">Ваше ФИО</label>
                                    <InputGrey :id="form.fio" class="application__form-input" v-model="form.fio"></InputGrey>
                                </div>
                                <div class="application__form-box">
                                    <label :for="form.phone">Ваш номер телефона</label>
                                    <InputGrey :id="form.phone" class="application__form-input" v-model="form.phone"></InputGrey>
                                </div>
                                <div class="application__form-box">
                                    <label :for="form.budget">Бюджет на сайт</label>
                                    <InputGrey :id="form.budget" class="application__form-input" v-model="form.budget"></InputGrey>
                                </div>
                            </div>
                            <div class="application__form-item">
                                <div class="application__form-box">
                                    <label :for="form.mail">Бюджет на сайт</label>
                                    <InputGrey :id="form.mail" class="application__form-input" v-model="form.mail"></InputGrey>
                                </div>
                                <div class="application__form-box">
                                    <label :for="form.comment">Бюджет на сайт</label>
                                    <InputGrey :id="form.comment" class="application__form-input" v-model="form.comment"></InputGrey>
                                </div>
                                <BtnGreen class="application__form-submit">Отправить</BtnGreen>
                            </div>
                        </div>
                        <div class="application__phone">
                            <img src="@/assets/image/application/phone.png" alt="Изображение телефона" class="application__phone-image">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Форма -->
        <!-- Контакты -->
        <section class="contacts">
            <div class="container">
                <div class="contacts__inner">
                    <h2 class="contacts__title title">Контакты</h2>
                    <vContacts></vContacts>
                </div>
            </div>
        </section>
        <!-- Контакты -->
    </div>
</template>

<script>
    export default {
        name: 'home-view',
        data() {
            return {
                section: [
                    {id: 1, name: 'hero',},
                    {id: 2, name: 'about'},
                    {id: 3, name: 'portfolio'},
                    {id: 4, name: 'rates'},
                ],
                sectionActive: 'hero',
                sliders: [
                    {id: 1, name: 'Макет', path_image: 'img1.jpg'},
                    {id: 2, name: 'Макет', path_image: 'img2.jpg'},
                    {id: 3, name: 'Макет', path_image: 'img3.jpg'},
                    {id: 4, name: 'Макет', path_image: 'img4.jpg'},
                    {id: 5, name: 'Макет', path_image: 'img5.jpg'},
                    {id: 6, name: 'Макет', path_image: 'img6.jpg'},
                    {id: 7, name: 'Макет', path_image: 'img7.jpg'},
                ],
                tarrifsList: [
                    {
                        id: 1,
                        name: 'Сайт “Визитка”',
                        text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
                        price: '30.000₽',
                        time: 'От 5 дней',
                    },
                    {
                        id: 2,
                        name: 'Сайт “Каталог”',
                        text: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
                        price: '60.000₽',
                        time: '15 дней',
                    },
                    {
                        id: 3,
                        name: 'Сайт “Визитка',
                        text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
                        price: '30.000₽',
                        time: 'От 5 дней',
                    },
                    {
                        id: 4,
                        name: 'Сайт “Каталог”',
                        text: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
                        price: '60.000₽',
                        time: '15 дней',
                    },
                    {
                        id: 5,
                        name: 'Сайт “Визитка',
                        text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
                        price: '30.000₽',
                        time: 'От 5 дней',
                    },
                    {
                        id: 6,
                        name: 'Сайт “Каталог”',
                        text: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
                        price: '60.000₽',
                        time: '15 дней',
                    },
                    {
                        id: 7,
                        name: 'Сайт “Визитка',
                        text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
                        price: '30.000₽',
                        time: 'От 5 дней',
                    },
                    {
                        id: 8,
                        name: 'Сайт “Визитка',
                        text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
                        price: '30.000₽',
                        time: 'От 5 дней',
                    },
                ],
                form: {
                    fio: '',
                    phone: '',
                    budget: '',
                    mail: '',
                    comment: '',
                }
            }
        },
        methods: {
            updateActive(item) {
                this.sectionActive = item
                console.log(`Смена роута: ${item}`)
            }
        }
    }
</script>

<style scoped>
    section {
        /* padding: 200px 0; */
        padding: 200px 0 0;
    }
    .wrapper {
        min-height: 100vh;
    }
    .wrapper__content {
        display: flex;
        min-height: calc(100vh - var(--header-padding));
        flex-direction: column;
        margin: 0 0 150px 0;
        /* padding: 0 0 500px 0; */
        border-bottom: 2px solid var(--clr-green-neon);
    }
    .wrapper__content > section {
        min-height: 100vh;
        overflow: hidden;
    }
    /* hero */
    .hero__inner {
        display: flex;
    }
    .hero__content {
        flex: 0 1 50%;
        max-width: 804px;
        padding: 125px 0;
        overflow: hidden;
    }
    .hero__subtitle {
        display: block;
        width: 100%;
    }
    .hero__text {
        margin: 0 0 25px 0;
    }
    .hero__info {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    .hero__image-box {
        flex: 0 1 50%;
    }
    .hero__image-box {
        flex: 0 1 50%;
        position: relative;
    }
    .hero__image {
        transform: translate(150px, 0);
        position: absolute;
    }
    /* hero */
    /* about */
    .about__inner {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px 35px;
    }
    .about__item {

    }
    .about__item-text {
        grid-column: span 2;
        max-width: 672px;
    }
    .about__text + .about__text {
        margin: 10px 0 0 0;
    }
    .about__button {
        margin: 25px 0 0 0;
    }
    .about__item-card {
        padding: 42px 40px 40px 40px;
        background: linear-gradient(139.56deg, #303134 10.06%, #282828 53.72%, #282828 88%);
        box-shadow: 0px 0px 80px rgba(44, 44, 45, 0.35);
        border-radius: 6px;
        transition: var(--transition-default);
    }
    .about__item-card:hover {
        transition: var(--transition-default);
        background: linear-gradient(139.56deg, #527791 10.06%, #325597 53.72%, #193895 88%);
        box-shadow: 0px 0px 150px rgba(59, 95, 150, 0.35);
    }
    /* about */
    /* portfolio */
    .portfolio {
    }
    .portfolio__inner {
        display: flex;
        flex-direction: column;
        gap: 35px;
    }
    .portfolio__info {
        max-width: 530px;
    }
    .portfolio__text {
        margin: 0 0 40px 0;
    }
    /* portfolio */
    /* application */
    .application {
        background: linear-gradient(91.69deg, #313134 -11.81%, #222224 23.9%, #12473C 60.63%, #292929 110.44%);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding: 45px 0 60px;
    }
    .application__content {
        justify-content: space-between;
        display: flex;
        align-items: center;
        gap: 70px;
    }
    .application__form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
        width: 100%;
    }
    .application__form-item {
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    .application__form-box {
        max-width: 490px;
        display: flex;
        flex-direction: column;
    }
    .application__form-input {
        width: 100%;
    }
    .application__form-submit {
        max-width: 185px;
    }
    .application__phone {
        margin: -150px 0;
    }
    .application__phone-image {
    }
    .application__phone-item {
        position: absolute;
        z-index: 2;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 30px;
        padding: 10px 5px 10px 10px;
    }
    .appliacation__phone-box {
        max-width: 170px;
        font-size: 0.75rem;
        line-height: 0.5rem;
        padding: 0 0 0 50px;
    }
    .appliacation__phone-title {
        margin: 0 0 3px 0;
    }
    .application__phone-item-1 {
        left: -400px;
        top: -20%;
    }
    .application__phone-item-2 {
        left: 0;
        top: -30%;
    }
    /* application */
    /* rates */
    .rates__title {
        text-align: center;
    }
    /* rates */
    /* contacts */
    .contacts {
        margin: 0 0 70px 0;
        padding: 70px 0 0 0;
    }
    .contacts__title {
        text-align: center;
        margin: 0 0 25px 0;
    }
    /* contacts */
    /* media */
    @media screen and (max-width: 1400px) {
        /* form */
        .application__phone {
            display: none;
        }
        /* form */
    }
    @media screen and (max-width: 1200px) {
        /* hero */
        .hero__content {
            flex: 0 1 60%;
            padding: 10px 0 0 10px;
        }
        .hero__image-box {
            flex: 0 1 40%;
        }
        .hero__image {
            width: 50vw;
            height: 75vh;
            object-fit: contain;
            transform: translate(0px, 0);
        }
        /* hero */
    }
    @media screen and (max-width: 980px) {
        .wrapper__content {
            padding: 0 0 75px 0;
            min-height: 50vh;
        }
        .wrapper__content > section { 
            min-height: 50vh;
        }
        /* hero */
        .hero__image {
            transform: translate(0, 0);
            position: relative;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        /* hero */
        /* contacts */
        .contacts__list {
            display: none;
        }
        /* contacts */
        /* about */
        .about__inner {
            grid-template-columns: repeat(2, 1fr);
        }
        /* about */
    }
    @media screen and (max-width: 800px) {
        /* hero */
        .hero__content {
            flex: 0 1 70%;
        }
        .hero__image-box {
            flex: 0 1 50%;
        }
        .hero__image {
            transform: translate(30px, 0px);
        }
        /* hero */
        /* form */
        .application__form {
            grid-template-columns: repeat(1, 1fr);
            justify-content: center;
            align-items: center;
        }
        .application__title {
            text-align: center;
        }
        .application__form-item {
            align-items: center;
        }
        .application__form-box {
            width: 100%;
        }
        /* form */
    }
    @media screen and (max-width: 550px) {
        /* about */
        .about__item-text {
            grid-column: span 1;
        }
        .about__inner[data-v-fae5bece] {
            grid-template-columns: repeat(1, 1fr);
        }
        /* about */
    }
    /* media */
</style>