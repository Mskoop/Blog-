import {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";


const DetailPage = () => {

  
    const [singlePost, setSinglePost] = useState()

    const params = useParams()
    console.log(params)
    

    useEffect(() => {
      fetch(`http://localhost:9000/api/v1/getPost/${params.id}`)
            .then((res) => res.json())
            .then(data => setSinglePost(data))
    }, [])
    console.log(singlePost)
if (!singlePost) return
// - wenn der fetch noch nicht durch ist, wird hier die abfrage beendet 
// alternativ: ein ? hinter singlePost... 
    return (   <div>
                  <h1>DetailPage</h1> 
                  <img style={{width:"200px"}} src={"http://localhost:9000/" + singlePost.image } alt="" />
                        <h2>{singlePost.title}</h2>
                        <p>{singlePost.content}</p> 
                        <Link to="/">Back</Link>
             </div>
            );
}
 
export default DetailPage;



 /* 
 Vorgehen. konkreten Blog aufrufen
use params - id => aus dem link auslesen
  - get route legen, mit er id  - uafrufen
   - mit use params die konkrete id auslesen und dann ans frontend schicken

 */