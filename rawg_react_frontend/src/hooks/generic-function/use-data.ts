import apiClient from "@/services/api-client";
import { type AxiosRequestConfig, CanceledError } from "axios";

import { useEffect, useState } from "react";

interface Response<T> {
    count: number
    results: T[]
}

const useData = <T>(path: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()
            setIsLoading(true)
        apiClient.get<Response<T>>(path, { signal: controller.signal, ...requestConfig })
            .then(res => {
                setData(res.data.results)
                setIsLoading(false)
            })     
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.log(err)
                setIsLoading(false)
            })   
        return () => controller.abort()
    }, deps ? [...deps] : [])

    return { data, error, isLoading }

}

export default useData