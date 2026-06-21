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
        <div class="container">
          <div class="banner__content banner__content--form form">
            <h2 class="banner__title form__title">
              <span class="text-form">Sign In to eatly</span>
            </h2>
            <div class="form__buttons-login">
              <a class="form__btn-link" href="" target="_blank" aria-label="auth with google play">
                <Icon iconName="google" iconWidth="22" iconHeight="23" fill="black" />
              </a>
              <a class="form__btn-link" href="" target="_blank" aria-label="auth with apple store">
                <Icon iconName="apple" iconWidth="26" iconHeight="31" fill="black" />
              </a>
            </div>
            <p>or</p>
            <div class="form">
              <form action="" method="post">
                <div class="form__input">
                  <label class="visually-hidden" for="email">Email</label>
                  <input id="email" type="email" required placeholder="email">
                </div>
                <div class="form__input">
                  <label class="visually-hidden" for="password">Password</label>
                  <input id="password" type="password" required placeholder="password">
                </div>
                <span>Forgot a password?</span>
                <div class="form-submit">
                  <button type="submit" class="btn btn-violet">Sign In</button>
                </div>
              </form>
              <p>Create A New Account? <span>Sign Up</span></p>
            </div>
          </div>
          <Graphics/>
        </div>
      </section>
    </main>
    <div></div>
</template>