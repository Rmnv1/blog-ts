<script setup lang="ts">
  import { computed } from 'vue'

  interface PaginationProps<T> {
    items: T[]
    itemsPerPage?: number
    maxVisiblePages?: number
  }

  const page = defineModel<number>('page', {
    default: 1,
  })

  const props = withDefaults(defineProps<PaginationProps<unknown>>(), {
    itemsPerPage: 6,
    maxVisiblePages: 5,
  })

  const emit = defineEmits<{
    (e: 'change', items: unknown[]): void
  }>()

  const totalPages = computed(() =>
    Math.ceil(props.items.length / props.itemsPerPage)
  )

  const paginatedItems = computed(() => {
    const start = (page.value - 1) * props.itemsPerPage
    const end = start + props.itemsPerPage
    const pageItems = props.items.slice(start, end)

    emit('change', pageItems)
    return pageItems
  })

  const visiblePageNumbers = computed(() => {
    if (totalPages.value <= props.maxVisiblePages) {
      return Array.from({ length: totalPages.value }, (_, i) => i + 1)
    }

    let start = Math.max(page.value - Math.floor(props.maxVisiblePages / 2), 1)
    let end = start + props.maxVisiblePages - 1

    if (end > totalPages.value) {
      end = totalPages.value
      start = Math.max(end - props.maxVisiblePages + 1, 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  })

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages.value) {
      page.value = newPage
    }
  }

  const prevPage = () => goToPage(page.value - 1)
  const nextPage = () => goToPage(page.value + 1)
</script>

<template>
  <div v-if="props.items.length > 0">
    <div class="pagination-content">
      <slot :items="paginatedItems"></slot>
    </div>

    <div v-if="totalPages > 1" class="pagination">
      <button
        v-for="pageNum in visiblePageNumbers"
        :key="pageNum"
        class="pagination__button"
        :class="{ 'pagination__button--active': page === pageNum }"
        @click="goToPage(pageNum)"
      >
        {{ pageNum }}
      </button>

      <button
        v-if="page !== totalPages"
        @click="nextPage"
        class="pagination__button pagination__button--next"
      >
        <img
          src="@/assets/images/icons/arrow.svg"
          alt="Next page icon"
          class="pagination__icon"
        />
      </button>
    </div>
  </div>
</template>
<style src="./styles.scss" scoped lang="scss"></style>
