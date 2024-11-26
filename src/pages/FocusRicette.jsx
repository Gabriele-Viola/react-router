import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"

export default function FocusRicetta() {
    const navigate = useNavigate()
    const [ricetta, setRicetta] = useState(null)
    const [ricette, setRicette] = useState({})
    const [index, setIndex] = useState('')
    const { slug } = useParams()
    const urlSlug = `http://localhoste:3000/ricette/${slug}`
    const url = 'http://localhoste:3000/ricette/'
    console.log(urlSlug);

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
                        setRicette(data.data)
                        console.log(data.data);
                        console.log(ricette);

                        setRicetta(ricette?.find(ricetta => ricetta.slug == slug))

                        setIndex(ricette?.indexOf(ricetta))
                    }

                })
                .catch(err => {
                    console.error(err);

                })
        },
        []
    )
    return (
        <>

            {ricetta ? (

                <div className="container">
                    <div className="card">
                        <img src={`http://localhoste:3000/imgs/${ricetta.image}`} alt={ricetta.title} />
                        <h3>{ricetta.title}{index}</h3>
                        <div className="description">
                            {ricetta.content}
                        </div>
                        <div className='tags'>
                            {ricetta.tags.map((tag, index) => <div key={index} className='tag' >{tag}</div>)}
                        </div>
                    </div>
                    <div className="story">
                        Il ciambellone è un dolce tradizionale le cui origini affondano nelle radici della cucina popolare europea. Sebbene oggi sia diffuso in molte varianti, la sua storia inizia come preparazione semplice e rustica, nata dalla necessità di sfruttare ingredienti facilmente reperibili in ambito domestico. Il nome "ciambellone" deriva da "ciambella", un termine che si riferisce alla forma circolare caratteristica, con o senza foro centrale, e richiama antichi dolci preparati già in epoca romana. Durante il Medioevo, in molte regioni d'Europa, erano comuni dolci dalla forma circolare, spesso cotti in forni comuni del villaggio. La forma ad anello aveva anche un valore simbolico: rappresentava l'unità e la continuità. Nel tempo, il ciambellone è diventato un simbolo della cucina casalinga, grazie alla sua semplicità. Gli ingredienti di base – farina, zucchero, uova, burro (o olio) e lievito – erano facilmente reperibili, mentre l'aggiunta di aromi come limone, vaniglia, o liquori variava in base alla disponibilità locale. Il ciambellone veniva preparato soprattutto per le colazioni o come merenda, legato alle tradizioni contadine e alle famiglie numerose. Oggi il ciambellone ha assunto numerose varianti regionali in Italia e nel mondo, dalle versioni arricchite con cacao, uvetta o frutta secca a quelle più moderne senza glutine o lattosio. Nonostante l'evoluzione delle ricette, rimane un dolce che evoca il calore familiare e la semplicità della tradizione, portando avanti il gusto genuino della cucina di un tempo.
                    </div>

                </div>
            ) : (<div>loading...</div>)

            }



        </>
    )
}