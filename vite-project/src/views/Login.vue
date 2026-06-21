<script setup>
import Header from './../components/Header.vue';
import Graphics from '../components/Graphics.vue';
import Icon from '../components/Icon.vue';
</script>

<template>
    <Header />
    <main class="page-main">
      <h1 class="page-title visually-hidden">Eatly - Login</h1>
      <section class="banner">
        <div class="container container--auth">
          <div class="banner__content banner__content--form form">
            <h2 class="banner__title form__title">
              <span class="text-form">Sign In to eatly</span>
            </h2>
            <div class="form__buttons-login">
              <a class="form__btn-link" href="" target="_blank" aria-label="auth with google play">
                <Icon iconName="google" iconWidth="22" iconHeight="23" />
              </a>
              <a class="form__btn-link" href="" target="_blank" aria-label="auth with apple store">
                <Icon iconName="apple" iconWidth="26" iconHeight="31" />
              </a>
            </div>
            <p class="form__text-dop">or</p>
            <form class="form__content" action="" method="post">
              <div class="form__input">
                <Icon iconClass="input-icon" iconName="email" iconWidth="16" iconHeight="12" />
                <label class="visually-hidden" for="email">Email</label>
                <input id="email" type="email" required placeholder="Email">
              </div>
              <div class="form__input">
                <Icon iconClass="input-icon" iconName="password" iconWidth="13" iconHeight="17" />
                <label class="visually-hidden" for="password">Password</label>
                <input id="password" type="password" required placeholder="Password">
              </div>
              <a class="form__small-link">Forget password?</a>
              <button class="form__btn-submit btn btn-violet" type="submit">Sign In</button>
            </form>
            <p class="form__other-link">Create A New Account? <span>Sign Up</span></p>
          </div>
          <div class="banner__graphics-wrapper">
            <Graphics/>
            <div class="banner__text-slider text-slider">
              <div class="text-slider__wrapper">
                <div class="text-slider__slide show">
                  <div class="text-slider__slide-title">Find Foods With Love</div>
                  <div class="text-slider__slide-text">
                    Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                  </div>
                </div>
                <div class="text-slider__slide">
                  <div class="text-slider__slide-title">Find Foods With Love</div>
                  <div class="text-slider__slide-text">
                    Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                  </div>
                </div>
                <div class="text-slider__slide">
                  <div class="text-slider__slide-title">Find Foods With Love</div>
                  <div class="text-slider__slide-text">
                    Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
                  </div>
                </div>
              </div>
              <div class="text-slider__buttons"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div></div>
</template>