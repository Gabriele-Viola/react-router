import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"

export default function FocusRicetta() {
    const navigate = useNavigate()
    const [ricetta, setRicetta] = useState(null)
    const { slug } = useParams()
    const url = `http://localhoste:3000/ricette/${slug}`
    console.log(url);

    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                })
        }
    )
    return (
        <>




        </>
    )
}