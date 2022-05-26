import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default function Main(props){
    const [people, setPeople] = useState(null); //always assign an initial value to state variable
    const URL = 'http://localhost:3001/people';

    //function for requesting api data
    const getPeople = async ()=> {
        const data =await fetch(URL).then(res => res.json());
        setPeople(data);
    }

    const createPeople = async person => {
        //ajax
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(person),
        });
        getPeople();
    }

    useEffect(() => {getPeople()}, [])

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index people={people} />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
}