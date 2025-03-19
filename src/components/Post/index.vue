<script setup lang="ts">
  import type { Post } from '@/stores/types/posts'

  const props = defineProps<{
    data: Post
  }>()
</script>

<template>
  <article class="post">
    <RouterLink :to="`/posts/${data.id}`">
      <div class="post__img-wrap">
        <!-- Здесь должно быть фото с сервера, но сервис из api http://lorempixel.com отвалился -->
        <img
          src="@/assets/images/example-1.png"
          alt="post preview image"
          class="post__img"
        />
      </div>
      <p class="post__preview-text">
        {{ data.preview }}
      </p>

      <span class="post__to-detail">Read more</span>
    </RouterLink>
  </article>
</template>

<style src="./styles.scss" scoped lang="scss"></style>
