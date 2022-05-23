import { useEffect, useState } from "react"

const useTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://plumbtion-manufacturer.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools]
}

export default useTools 