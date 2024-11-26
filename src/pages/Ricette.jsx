import { Link } from 'react-router'
import AppCard from '../Components/AppCard'
// import AppForm from '../Components/AppForm'
import { useState, useEffect } from 'react'
const api_server = 'http://localhost:3000'
const api_endpoint = '/ricette/'
const url = api_server + api_endpoint

// const initialFormData = {
//     title: '',
//     content: '',
//     image: '',
//     tags: [],
//     checked: false
// }

export default function Ricette() {
    const [ricette, setRicette] = useState([])
    // const [formData, setFormData] = useState(initialFormData)
    const [allTags, setAllTags] = useState([])
    // const [checktags, setTags] = useState(initialFormData.tags)

    function fetchData(url = `${api_server}${api_endpoint}`) {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setRicette(data.data)
            })
    }



    function handleDeleteClick(e) {
        e.preventDefault()
        const id = e.target.getAttribute('slug')
        console.log(url + id);

        fetch(url + id, {
            method: 'DELETE',
            headers: {
                'ContentType': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {

                setRicette(data.data)
            })
    }
    useEffect(fetchData, [])

    return (

        <div className="container">
            <Link to='addricetta'>
                <i className="bi bi-plus-circle"></i>
            </Link>
            {/* <section className='operationSect'>
                <AppForm handleFormSubmit={handleFormSubmit} formData={formData} handleFormfield={handleFormfield} allTags={allTags} />
            </section> */}
            <section>
                {ricette ? ricette.map(ricetta => (
                    <AppCard url={url} key={ricetta.title} ricetta={ricetta} server={api_server} handleDeleteClick={handleDeleteClick} />
                )) :
                    <p>Nessuna ricetta trovata</p>}

            </section>
        </div>

    )
}