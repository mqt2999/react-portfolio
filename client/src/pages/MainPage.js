import React, {useState,useEffect} from 'react'
import Bio from "../components/BioSec"
import ProjectList from "../components/ProjectList"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function Main() {
    const [projects,setProjects] = useState([])

    useEffect ( () => {
        console.log("useEffect")
        getProjects()
    },[])
   

    function getProjects() {

        axios.get("/api/projects/")
        .then( res => {
            setProjects(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }

    console.log("this is isn main", projects)

    return (
        <>
            
            <Bio />
            <ProjectList projects={projects}/>
            
        </>

    );
}
export default Main;