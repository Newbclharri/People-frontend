import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default function Main(props){
    const [people, setPeople] = useState(null); //always assign an initial value to state variable
    const URL = 'http://localhost:3001/people'

    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
}