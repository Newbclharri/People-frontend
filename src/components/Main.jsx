import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default function Main(props){
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    )
}