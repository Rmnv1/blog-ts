import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/utils/api.ts'
import type { Post } from './types/posts'

export const usePostsStore = defineStore('posts', () => {
  const router = useRouter()
  const postsLoading = ref(false)
  const allPosts = ref<Post[] | []>([])
  const currentPost = ref<Post | null>(null)

  const setPostsLoading = (newVal: boolean) => (postsLoading.value = newVal)

  const setAllPosts = (newVal: Post[]) => (allPosts.value = newVal)

  const getAllPosts = async () => {
    setPostsLoading(true)
    try {
      const data = await api.get<Post[]>('/posts')
      setAllPosts(data)
    } catch (err) {
      console.error(err, 'error')
    } finally {
      setPostsLoading(false)
    }
  }

  const setCurrentPost = (newVal: Post) => (currentPost.value = newVal)

  // Можно не делать запросы, а замапить результат allPosts, чтобы получать пост таким образом: mappedPosts[id] :)
  const getPostById = async (id: number) => {
    setPostsLoading(true)
    try {
      const data = await api.get<Post>(`/posts/${id}`)
      setCurrentPost(data)
    } catch (err) {
      router.push({ path: '/404' })
    } finally {
      setPostsLoading(false)
    }
  }

  return {
    postsLoading,
    allPosts,
    currentPost,
    getAllPosts,
    getPostById,
  }
})
