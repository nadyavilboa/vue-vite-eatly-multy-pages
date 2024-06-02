<script setup>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';
import Rating from './../components/Rating.vue';
import DataCompany from './../components/DataCompany.vue';
import RestsList from './../components/RestsList.vue';
import DishesList from '../components/DishesList.vue';
import Purchases from '../components/Purchases.vue';
import Icon from '../components/Icon.vue';
import Subscribe from '../components/Subscribe.vue';
</script>

<template>
  <Header />
  <main class="page-main">
    <h1 class="page-title visually-hidden">Eatly multy pages</h1>
    <section class="banner">
      <div class="container">
          <div class="banner__content">
              <h2 class="banner__title text-title">
                  <span class="banner__caption">Over 1000 users</span>
                  <span class="text-bold">
                      Enjoy Foods Over <span class="text-violet">World</span>
                  </span>
                  <span class="text-bold text-bold--tablet">
                      Enjoy Foods All Over The <span class="text-violet">World</span>
                  </span>
              </h2>
              <p class="banner__text">
                  Eatly help you set saving goals, earn cash back offers, 
                  Go to disclaimer for more details and get paychecks 
                  up to two days early. Get a <span class="text-violet">$20 bonus.</span>
              </p>
              <div class="banner__btn-group">
                  <a
                      class="banner__btn btn btn-violet"
                      href="#"
                      target="_blank"
                  >
                      Get Started
                  </a>
                  <a
                      class="banner__btn btn btn-border"
                      href="#"
                      target="_blank"
                  >
                      Go Pro
                  </a>
              </div>
              <Rating :value="5" :disabled="true" logo="trustpilot" :class="'banner__rating'" name="banner-rating" :ratingNumber="4900" />
          </div>
          <div class="banner__graphics graphics">
              <div class="graphics__rest">
                  <picture>
                      <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-2.webp 1x, ./../assets/img/food-desktop-2-@2x.webp 2x">
                      <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-2.webp 1x, ./../assets/img/food-tablet-2-@2x.webp 2x">
                      <source type="image/webp" srcset="./../assets/img/food-mobile-2.webp 1x, ./../assets/img/food-mobile-2-@2x.webp 2x">
                      <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-2.png 1x, ./../assets/img/food-desktop-2-@2x.png 2x"/> 
                      <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-2.png 1x, ./../assets/img/food-tablet-2-@2x.png 2x"/>
                      <img
                          class="graphics__rest-img"
                          src="./../assets/img/food-mobile-2.png"
                          srcset="./../assets/img/food-mobile-2-@2x.png 2x"
                          width="35"
                          height="38"
                          alt="dish vegetables and fish"
                          loading="lazy"
                      />
                  </picture>
                  <span class="graphics__rest-info">
                      <span class="graphics__rest-name">Chicken Hell</span>
                      <span class="graphics__rest-text">On The Way</span>
                      <span class="graphics__rest-time">3:09 PM</span>
                  </span>
              </div>
              <div class="graphics__ring-img-wrapper">
                  <picture>
                      <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/food-desktop-1.webp 1x, ./../assets/img/food-desktop-1-@2x.webp 2x">
                      <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/food-tablet-1.webp 1x, ./../assets/img/food-tablet-1-@2x.webp 2x">
                      <source type="image/webp" srcset="./../assets/img/food-mobile-1.webp 1x, ./../assets/img/food-mobile-1-@2x.webp 2x">
                      <source media="(min-width:1280px)" srcset="./../assets/img/food-desktop-1.png 1x, ./../assets/img/food-desktop-1-@2x.png 2x"/> 
                      <source media="(min-width:1024px)" srcset="./../assets/img/food-tablet-1.png 1x, ./../assets/img/food-tablet-1-@2x.png 2x"/>
                      <img
                          class="graphics__ring-img"
                          src="./../assets/img/food-mobile-1.png"
                          srcset="./../assets/img/food-mobile-1-@2x.png 2x"
                          width="204"
                          height="210"
                          alt="dish vegetables and fish"
                          loading="lazy"
                      />
                  </picture>
              </div>
              <div class="graphics__graph">
                  <div class="graphics__graph-content">
                      <picture>
                          <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/graph-desktop.webp 1x, ./../assets/img/graph-desktop-@2x.webp 2x">
                          <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/graph-tablet.webp 1x, ./../assets/img/graph-tablet-@2x.webp 2x">
                          <source type="image/webp" srcset="./../assets/img/graph-mobile.webp 1x, ./../assets/img/graph-mobile-@2x.webp 2x">
                          <source media="(min-width:1280px)" srcset="./../assets/img/graph-desktop.png 1x, ./../assets/img/graph-desktop-@2x.png 2x"/> 
                          <source media="(min-width:1024px)" srcset="./../assets/img/graph-tablet.png 1x, ./../assets/img/graph-tablet-@2x.png 2x"/>
                          <img
                              src="./../assets/img/graph-mobile.png"
                              srcset="./../assets/img/graph-mobile-@2x.png 2x"
                              width="98"
                              height="98"
                              alt="graphic"
                              loading="lazy"
                          />
                      </picture>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <DataCompany amountCustomers="10K+" amountDishes="4M" levelSupport="99.99%" />
    <section class="quality">
        <div class="quality__wrapper container">
            <div class="quality-wrapper-info">
                <h2 class="quality__title text-title">
                    <span class="text-bold">
                        Premium <span class="text-violet">Quality</span> For Your Health
                    </span>
                </h2>
                <ul class="quality__list">
                    <li class="quality__item">
                        Premium quality food is made with ingredients
                        that are packed with essential vitamins, minerals.
                    </li>
                    <li class="quality__item">
                        These foods promote overall wellness by
                        support healthy digestion and boosting immunity
                    </li>
                </ul>
                <button class="quality__btn btn btn-violet">
                    <span class="quality__btn-text">Download</span>
                    <Icon iconName="arrow" iconWidth="18" iconHeight="18" />
                </button>
            </div>
            <div class="quality__img">
                <picture>
                    <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/phone-desktop.webp 1x, ./../assets/img/phone-desktop-@2x.webp 2x">
                    <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/phone-tablet.webp 1x, ./../assets/img/phone-tablet-@2x.webp 2x">
                    <source type="image/webp" srcset="./../assets/img/phone.webp 1x, ./../assets/img/phone-@2x.webp 2x">
                    <source media="(min-width:1280px)" srcset="./../assets/img/phone-desktop.png 1x, ./../assets/img/phone-tablet-@2x.png 2x"/>
                    <source media="(min-width:1024px)" srcset="./../assets/img/phone-tablet.png 1x, ./../assets/img/phone-tablet-@2x.png 2x"/>
                    <img
                        class="quality__img-phone"
                        src="./../assets/img/phone.png"
                        srcset="./../assets/img/phone-@2x.png 2x"
                        width="171"
                        height="342"
                        alt=""
                        loading="lazy"
                    />
                </picture>
                <picture>
                    <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/phone-display-desktop.webp 1x, ./../assets/img/phone-display-desktop-@2x.webp 2x">
                    <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/phone-display-tablet.webp 1x, ./../assets/img/phone-display-tablet-@2x.webp 2x">
                    <source type="image/webp" srcset="./../assets/img/phone-display.webp 1x, ./../assets/img/phone-display-@2x.webp 2x">
                    <source media="(min-width:1280px)" srcset="./../assets/img/phone-display-desktop.png 1x, ./../assets/img/phone-display-desktop-@2x.png 2x"/>
                    <source media="(min-width:1024px)" srcset="./../assets/img/phone-display-tablet.png 1x, ./../assets/img/phone-display-desktop-@2x.png 2x"/>
                    <img
                        class="quality__img-phone quality__img-phone--display"
                        src="./../assets/img/phone-display.png"
                        srcset="./../assets/img/phone-display-@2x.png 2x"
                        width="151"
                        height="325"
                        alt="phone with open our app"
                        loading="lazy"
                    />
                </picture>
            </div>
        </div>
    </section>
    <RestsList />
    <DishesList />
    <Purchases />
    <section class="reviews">
        <div class="reviews__wrapper container">
            <h2 class="reviews__title text-title">
                <span class="text-bold">
                    <span class="text-violet">Customer</span> Say
                </span>
            </h2>
            <div class="reviews__slider">
                <ul class="reviews__list">
                    <li class="review">
                        <header class="review__header">
                            <div class="review__user-data user">
                                <picture>
                                    <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/user-desktop.webp 1x, ./../assets/img/user-desktop-@2x.webp 2x">
                                    <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/user-tablet.webp 1x, ./../assets/img/user-tablet-@2x.webp 2x">
                                    <source type="image/webp" srcset="./../assets/img/user.webp 1x, ./../assets/img/user-@2x.webp 2x">
                                    <source media="(min-width:1280px)" srcset="./../assets/img/user-desktop.png 1x, ./../assets/img/user-desktop-@2x.png 2x"/>
                                    <source media="(min-width:1024px)" srcset="./../assets/img/user-tablet.png 1x, ./../assets/img/user-tablet-@2x.png 2x"/>
                                    <img
                                        class="review__user-photo"
                                        src="./../assets/img/user.png"
                                        srcset="./../assets/img/user-@2x.png 2x"
                                        width="42"
                                        height="42"
                                        alt="User photo"
                                        loading="lazy"
                                    />
                                </picture>
                                <span class="review__user-info">
                                    <span class="review__user-name">Alexander R.</span>
                                    <span class="review__user-date">01 Year With Us</span>
                                </span>
                            </div>
                            <Icon class="review__right-icon" iconName="review" iconWidth="35" iconHeight="26" />
                        </header>
                        <p class="review__text">
                            “ Online invoice payment helps companies save time, are faster and save maximum effort 
                            for the clients and save maximum effort. Online invoice payment helps companies save time ”
                        </p>
                        <Rating :value="4" :disabled="true" :class="'review__rating'" name="review-rating-1" />
                    </li>
                    <li class="review">
                        <header class="review__header">
                            <div class="review__user-data user">
                                <picture>
                                    <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/user-desktop.webp 1x, ./../assets/img/user-desktop-@2x.webp 2x">
                                    <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/user-tablet.webp 1x, ./../assets/img/user-tablet-@2x.webp 2x">
                                    <source type="image/webp" srcset="./../assets/img/user.webp 1x, ./../assets/img/user-@2x.webp 2x">
                                    <source media="(min-width:1280px)" srcset="./../assets/img/user-desktop.png 1x, ./../assets/img/user-desktop-@2x.png 2x"/>
                                    <source media="(min-width:1024px)" srcset="./../assets/img/user-tablet.png 1x, ./../assets/img/user-tablet-@2x.png 2x"/>
                                    <img
                                        class="review__user-photo"
                                        src="./../assets/img/user.png"
                                        srcset="./../assets/img/user-@2x.png 2x"
                                        width="42"
                                        height="42"
                                        alt="User photo"
                                        loading="lazy"
                                    />
                                </picture>
                                <span class="review__user-info">
                                    <span class="review__user-name">William R.</span>
                                    <span class="review__user-date">01 Year With Us</span>
                                </span>
                            </div>
                            <Icon class="review__right-icon" iconName="review" iconWidth="35" iconHeight="26" />
                        </header>
                        <p class="review__text">
                            “ Online invoice payment helps companies save time, are faster and save maximum effort 
                            for the clients and save maximum effort. Online invoice payment helps companies save time ”
                        </p>
                        <Rating :value="5" :disabled="true" :class="'review__rating'" name="review-rating-2" />
                    </li>
                    <li class="review">
                        <header class="review__header">
                            <div class="review__user-data">
                                <picture>
                                    <source type="image/webp" media="(min-width: 1280px)" srcset="./../assets/img/user-desktop.webp 1x, ./../assets/img/user-desktop-@2x.webp 2x">
                                    <source type="image/webp" media="(min-width: 1024px)" srcset="./../assets/img/user-tablet.webp 1x, ./../assets/img/user-tablet-@2x.webp 2x">
                                    <source type="image/webp" srcset="./../assets/img/user.webp 1x, ./../assets/img/user-@2x.webp 2x">
                                    <source media="(min-width:1280px)" srcset="./../assets/img/user-desktop.png 1x, ./../assets/img/user-desktop-@2x.png 2x"/>
                                    <source media="(min-width:1024px)" srcset="./../assets/img/user-tablet.png 1x, ./../assets/img/user-tablet-@2x.png 2x"/>
                                    <img
                                        class="review__user-photo"
                                        src="./../assets/img/user.png"
                                        srcset="./../assets/img/user-@2x.png 2x"
                                        width="42"
                                        height="42"
                                        alt="User photo"
                                        loading="lazy"
                                    />
                                </picture>
                                <span class="review__user-info">
                                    <span class="review__user-name">Bill R.</span>
                                    <span class="review__user__date">01 Year With Us</span>
                                </span>
                            </div>
                            <Icon class="review__right-icon" iconName="review" iconWidth="35" iconHeight="26" />
                        </header>
                        <p class="review__text">
                            “ Online invoice payment helps companies save time, are faster and save maximum effort 
                            for the clients and save maximum effort. Online invoice payment helps companies save time ”
                        </p>
                        <Rating :value="3" :disabled="true" :class="'review__rating'" name="review-rating-3" />
                    </li>
                </ul>
                <div class="reviews__buttons">
                    <button class="reviews__btn reviews__btn--active" aria-label="one review"></button>
                    <button class="reviews__btn" aria-label="two review"></button>
                    <button class="reviews__btn" aria-label="three review"></button>
                </div>
            </div>
            <Subscribe />
        </div>
    </section>
  </main>
  <Footer />
</template>