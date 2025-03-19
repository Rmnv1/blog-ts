<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__label">Is there a project?</p>
      <div class="footer-content">
        <h2 class="footer__title">Let’s work together</h2>
        <div class="footer-contacts">
          <div class="footer-contacts__block">
            <span class="footer-contacts__text">For all questions</span>
            <ul class="footer-contacts__list">
              <li class="footer-contacts__item">
                <a href="tel:+79202780068" class="footer-contacts__link"
                  >+7 (920) 278—00—68</a
                >
              </li>
              <li class="footer-contacts__item">
                <a href="mailto:qtim@agency.com" class="footer-contacts__link"
                  >qtim@agency.com</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-contacts__block">
            <span class="footer-contacts__text">Office in Russia</span>
            <span class="footer-contacts__text">
              139 Ruben Station Lake Drew, NM 52678
            </span>
            <a href="#" class="footer-contacts__icon"></a>
          </div>
          <div class="footer-contacts__block">
            <span class="footer-contacts__text">Office in Dubai</span>
            <span class="footer-contacts__text">
              139 Ruben Station Lake Drew, NM 52678
            </span>
            <a href="#" class="footer-contacts__icon"></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="footer-bottom__list">
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Facebook</a>
          </li>
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Instagram</a>
          </li>
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Telegram</a>
          </li>
        </ul>

        <RouterLink to="/" class="footer-bottom__circle">Go</RouterLink>

        <ul class="footer-bottom__list">
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Behance</a>
          </li>
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Linkedn</a>
          </li>
          <li class="footer-bottom__item">
            <a href="#" class="footer-bottom__link">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style src="./styles.scss" scoped lang="scss"></style>
