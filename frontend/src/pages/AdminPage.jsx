import {Link} from "react-router-dom"



const AdminPage = () => {

    const sendPost = (e) => {
  e.preventDefault()

        const formData = new FormData(e.target)  // Standardsyntax für FormData
   
     fetch("http://localhost:9000/api/v1/addPost",
        {method: "POST",
        body:formData}) 

            .then (res => res.json())
           
    }


    return ( 
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={sendPost}>
                <h2>Neu Post</h2>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" placeholder="content"  name="content"/>
                <input type="file" name="image" placeholder="image"/>
                <button type="submit">Send</button>



            </form>
        </div>
        
    )
}
 
export default AdminPage;