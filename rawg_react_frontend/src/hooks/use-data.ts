import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Response<T> {
    count: number
    results: T[]
}

const useData = <T>(path: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        apiClient.get<Response<T>>(path, { signal: controller.signal })
            .then(res => {
                setData(res.data.results)
            })     
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                console.log(err)
            })   
        return () => controller.abort()
    }, [path])

    return { data, error }

}

export default useData