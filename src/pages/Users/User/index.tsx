'use client'

import { http } from "@/utils/http"
import { useEffect } from "react"

const UserPage = ({ slug }: { slug: string }) => {

    useEffect(() => {
        const fetchData = async () => {
            await http.get('user/' + slug).then(d => console.log(d.data))
        }
        fetchData()
    }, [])



    return (
        <div>UserPage</div>
    )
}

export default UserPage