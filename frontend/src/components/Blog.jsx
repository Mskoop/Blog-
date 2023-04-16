
// um etwas zu verlinken, muss man LInk importieren  
import { Link } from "react-router-dom";



// Das ist eine Schablone, in der die Blogbeiträge aufgefangen werden sollen: also Img, Titel und kurzer TEXT!  
// außerdem soll es hier einen Link zu Detail Page geben

//  -Frage - könntem man auch props statt oneB anwenden?

// bein ankliecken des jeweiligen Bildes sollte man auf eine Seite mit den Detailsczu dem Beitrag kommen.

const Blog = ({oneB}) => {
    return ( 
       
       <Link to={"/detail/" + oneB.id}>
        {/* andere Schreibweise: to: `/detail/${oneB.id}` */}
            <img style={{width:"200px"}} src={"http://localhost:9000/" + oneB.image } alt="" />
            <h2>{oneB.title}</h2>
            <p>{oneB.content}</p>
        </Link>
       
     );
}
 
export default Blog;
/* 
 - Jedes Objekt aus der Datenbank bräuchten eine ID, 
*/