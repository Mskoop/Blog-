import {Link} from "react-router-dom"
import Blog from "../components/Blog";
import { useEffect, useState } from "react";
// import uuidv4. etc....

const Landing = () => {
    
    const [posts, setPosts ]= useState([])

    

    useEffect(() => {
        fetch("http://localhost:9000/api/v1/getPosts")
        .then(res=> res.json())
        .then(data => setPosts(data))
    }, [])

    return ( 
       <>
        <Link to="/admin">LINK ZU ADMINPAGE</Link>
          { posts && posts.map((post, index) =>  {         // posts && / {} - wegen JS ? // hnter posts vor map => ? statt "posts &&""
               return <Blog 
               key={index} 
               oneB={post}/>    // Verbindung zu oneB ins backend??
               // für key wäre key={uuidv4()} möglich
            })
          }    
        </>
     );
}
 
export default Landing;
