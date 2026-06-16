<script setup>
import Header from './../components/Header.vue';
</script>

<template>
    <Header />
    <main class="page-main">
      <h1 class="page-title visually-hidden">Eatly - Login</h1>
      <section class="banner">
        <div class="container">
          <div class="banner__content">
            <h2 class="banner__title">
              <span class="text-form">Sign In to eatly</span>
            </h2>
            <div class="buttons-login"></div>
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
    </main>
</template>