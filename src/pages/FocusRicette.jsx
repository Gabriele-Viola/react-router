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
                    const keys = Object.keys(data)
                    console.log(keys);
                    if (keys.includes('error')) {
                        navigate('/404')

                    } else {
                        setRicetta(data.data)
                    }

                })
                .catch(err => {
                    console.error(err);

                })
        }, [])
    return (
        <>

            {ricetta ? (

                <div className="container">
                    <div className="card">
                        <img src={`http://localhoste:3000/imgs/${ricetta.image}`} alt={ricetta.title} />
                        <h3>{ricetta.title}</h3>
                        <div className="description">
                            {ricetta.content}
                        </div>
                    </div>
                </div>
            ) : (<div>loading...</div>)

            }



        </>
    )
}