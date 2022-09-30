import { useEffect, useState } from "react"
import { client } from "../client"

export const useFetchContents = (type) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetch = async() => {
            await client.fetch(`*[_type == "${type}"]`)
            .then((res) => {
                setData(res)
                setLoading(false)
            })
        }
        fetch();
    }, [type])

    return [ data, loading ]
}