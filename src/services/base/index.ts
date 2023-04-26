import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

const apiUrl = process.env.VUE_APP_API_URL as string

export abstract class HTTPBaseService {
  protected axiosInstance: AxiosInstance
  protected readonly baseURL: string

  public constructor(baseURL = apiUrl) {
    this.baseURL = baseURL
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 40 * 1000,
    })

    this.initializeRequestInterceptor()
    this.initializeResponseInterceptor()
  }

  private initializeRequestInterceptor = () => {
    this.axiosInstance.interceptors.request.use(this.handleRequest)
  }

  private initializeResponseInterceptor = () => {
    this.axiosInstance.interceptors.response.use((response) => {
      return response.data
    }, this.handleError)
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    return config
  }

  private handleError = async (error: AxiosError) => {
    const errorMessage = error.response?.data
      ? (error.response?.data as any).message
      : error.message

    console.log(error.code!, errorMessage)
    throw error
  }

  protected post<T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
    return this.axiosInstance.post<unknown, T>(url, data, config)
  }

  protected get<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.axiosInstance.get<unknown, T>(url, config)
  }

  protected head<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.axiosInstance.head<unknown, T>(url, config)
  }
}
