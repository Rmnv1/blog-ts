<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { usePostsStore } from '@/stores/posts'
  import { Post, Pagination } from '@/components'

  const postsStore = usePostsStore()

  const { allPosts, postsLoading } = storeToRefs(postsStore)

  const currentPage = ref(1)
  const displayedPosts = ref([])

  const handlePageChange = (items: unknown[]) => {
    displayedPosts.value = items as Post[]
  }

  onMounted(async () => {
    if (!allPosts.value.length) await postsStore.getAllPosts()
  })
</script>

<template>
  <div class="articles-list">
    <template v-if="!postsLoading">
      <Pagination
        :items="allPosts"
        :items-per-page="8"
        v-model:page="currentPage"
        @change="handlePageChange"
      >
        <template #default="{ items }">
          <div class="articles-grid">
            <Post v-for="post in displayedPosts" :key="post.id" :data="post" />
          </div>
        </template>
      </Pagination>
    </template>
    <span v-else class="articles-grid__loading">Loading...</span>
  </div>
</template>

<style src="./styles.scss" scoped lang="scss"></style>
