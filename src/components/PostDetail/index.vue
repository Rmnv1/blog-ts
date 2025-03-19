<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostsStore } from '@/stores/posts'
  import { Post, Pagination } from '@/components'

  const postsStore = usePostsStore()

  const { currentPost, postsLoading } = storeToRefs(postsStore)

  const route = useRoute()

  const currentPage = ref(1)
  const displayedPosts = ref([])

  const handlePageChange = (items: unknown[]) => {
    displayedPosts.value = items as Post[]
  }

  const currentPostId = computed(() => route.params.id || null)

  onMounted(async () => {
    if (currentPostId.value) await postsStore.getPostById(currentPostId.value)
  })
</script>

<template>
  <article class="post-detail">
    <div v-if="!postsLoading" class="post-detail__content">
      <h1 class="post-detail__title">{{ currentPost?.title }}</h1>
      <img
        src="@/assets/images/example-2.png"
        alt="Detail post image"
        class="post-detail__img"
      />

      <span class="post-detail__label">About</span>

      <p class="post-detail__text">
        {{ currentPost?.description }}
      </p>
    </div>
    <div v-else class="post-detail__loading">Loading...</div>
  </article>
</template>

<style src="./styles.scss" scoped lang="scss"></style>
