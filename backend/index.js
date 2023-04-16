import express from "express"
import cors from "cors"
import { readFile, writeFile, appendData } from "./helper.js"
import "./config/config.js"
import multer from "multer"
import morgan from "morgan"


//Zuordnung von express als const, und Port
const app = express()
const PORT = Number(process.env.PORT) || 9001 // hier ein alterntiv PORT-NR nennen
// - mit Number wandelt man den Port in Nummer um.. 

const upload = multer({ dest:"./img"})
//

//Middelware
app.use(cors())

//logger  - middelware
app.use(morgan("dev"))

//Parser
app.use(express.json())

// - (eventuelle Möglichkeit, Bilder im Browser anzuzeigen - bezogen auf backend ::: => 
 app.use("/img", express.static("./img"))

//Get-route
app.get("/api/v1/getPosts", (req, res) => {
//Dateien lesen
    readFile()
//Rücksenden dr Daten
    .then(data => res.json(data))
// Error abfrage
    .catch(err => console.log("error"))
})

app.get("/api/v1/getPost/:id", (req, res) => {
    const paramsID = req.params.id
    console.log(paramsID)
        readFile()
    //Rücksenden dr Daten
        .then(data =>{
                    const singlePost = data.find(({id}) => id == paramsID )
        res.json(singlePost)}) 
    // Error abfrage
        .catch(err => console.log("error"))
    })

//Post-route
app.post("/api/v1/addPost", upload.single("image"), (req, res) => {
    const datanew = req.body
    datanew.image = req.file.path
    appendData(datanew)
    .then((data) => res.json(data))
    .catch((err) => res.end(err))
})



app.listen(PORT, () => console.log("Höre auf Port,", PORT))
//app.listen( PORT, () => console.log( `Ich lauche gern auf ${9000}`) )