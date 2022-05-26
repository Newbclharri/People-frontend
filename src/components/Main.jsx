import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";


export default function Main(props){
    const [people, setPeople] = useState(null); //always assign an initial value to state variable

    //This is the url from my server api
    const URL = 'http://localhost:3001/people/';

    //function for requesting api data
    const getPeople = async ()=> {
        const data =await fetch(URL).then(res => res.json()).catch(err => console.log(err));
        setPeople(data);
    }

    //this will specify a post request to my api.  The post route is hit adding the object created from the form on the Index page
    const createPeople = async person => {
        //ajax
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(person), //converts to familiar JSON object format. We add the body property as we are sending data to my server in the request becaue this is a post
        });
        //update list of people
        getPeople();
    }

    //update request: update a person from People collection in MongoDB
    const updatePerson = async (person, id) => {
        //make put request to edit people
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(person)
        });
        //update list of people
        getPeople();
    }

    //delete request: a person from People collection in MongoDB
    const deletePerson = async (id) => {
        //make delete request to create people
        await fetch(URL + id, {
            method: "DELETE",
        });
        //update list of people
        getPeople();
    }

    useEffect(() => {getPeople()}, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={
                    <Index 
                    people={people} 
                    createPeople={createPeople} 
                    />} 
                />
                <Route path="/people/:id" element={
                <Show 
                    people={people} 
                    updatePerson={updatePerson} 
                    deletePerson={deletePerson} 
                    />} 
                />
            </Routes>
        </main>
    )
}