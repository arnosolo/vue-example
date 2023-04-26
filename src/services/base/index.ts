import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_BASE_URL

export abstract class HTTPBaseService {
  protected instance: AxiosInstance
  protected readonly baseURL: string

  public constructor(baseURL = apiUrl) {
    this.baseURL = baseURL
    this.instance = axios.create({
      baseURL,
      timeout: 40 * 1000,
    })

    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      async (error: AxiosError) => {
        console.error(`[AxiosError] code = ${error.code}, ${error.message}`)
        throw error
      },
    )
  }

  protected post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.instance.post<unknown, T>(url, data, config)
  }

  protected get<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.instance.get<unknown, T>(url, config)
  }

  protected head<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.instance.head<unknown, T>(url, config)
  }
}
