<script setup lang="ts">
  import { Logo } from '@/components'
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__logo">
      <component :is="Logo" />
    </RouterLink>

    <div class="header-content">
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__item">
            <RouterLink to="/" class="header-nav__link">Works</RouterLink>
          </li>
          <li class="header-nav__item">
            <RouterLink to="/" class="header-nav__link">About</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="header-lang">
        <!-- Конечно, здесь должна быть кнопка с дропдауном, но в рамках тестового будет так:) -->
        <div class="header-lang__item">
          <img
            src="@/assets/images/icons/uk.svg"
            alt="UK icon"
            class="header-lang__img"
          />
        </div>
      </div>
      <RouterLink to="/" class="button">Let’s work</RouterLink>
    </div>
  </header>
</template>

<style src="./styles.scss" scoped lang="scss"></style>
