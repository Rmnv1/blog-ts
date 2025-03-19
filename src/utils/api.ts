import axios, { AxiosError } from 'axios'

class ApiClient {
  private axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
  })

  constructor() {
    this.axios.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(this.normalizeError(error))
    )
  }

  private normalizeError(error: AxiosError): Error {
    const message =
      error.response?.statusText || error.message || 'Неизвестная ошибка'

    return new Error(message)
  }

  async get<T = any>(url: string, params?: any): Promise<T> {
    const { data } = await this.axios.get<T>(url, { params })
    return data
  }

  // async post<T = any>(url: string, body?: any): Promise<T> {
  //   const { data } = await this.axios.post<T>(url, body)
  //   return data
  // }
}

export default new ApiClient()
