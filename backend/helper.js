import fs from "fs"

//Lesen von Json-dateien
export const readFile = () => {
    return new Promise ((resolve, reject) => {
        fs.readFile("./posts.json", (err, data) => {
            if (err) reject(err)
            else { 
            resolve (JSON.parse(data.toString()))
        }
        })
    })
}

export const writeFile = (datanew) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile("./posts.json", JSON.stringify(datanew, null, 2), (err) => {
            if (err) reject(err)
                else resolve("erfolgreich")
        } 
        )
    })
}

export const appendData = (datanew) => {
    return new Promise ((resolve, reject) => {
        readFile()
        .then((data) => {
            datanew.id = data.length + 1 // hier fügen wir die id den neuen posts zu 
           // console.log("first")
            const newData = [...data, datanew]
            writeFile(newData)
            .then((data) => resolve(newData))
            .catch((err) => reject(err))
            //Auch mögliche Schreibweise:
            //.then(res => resolve("check"))
            //.catch(err => reject(err))
        })
        .catch((err) => console.log(err))
    })
   

}