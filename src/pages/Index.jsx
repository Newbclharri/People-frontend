import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({people, createPeople}){

    const[form, setNewForm] = useState({
        name: '',
        image: '',
        title: '',
    });

    const handleChange = e => {
        setNewForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        createPeople(form)
        setNewForm({
            name: "",
            image: "",
            title: "",
        });
    }

    //loaded function
    const loaded = () => {
        return people.map(person =>(
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>                
                </Link>
                <img src={person.image} alt={person.name} id={person.name} className="img-person"></img>
                <h3>{person.name}:</h3>
                <h3>{person.title}</h3>
            </div>
        ))
    }

    //loading function
    const loading = () => <h1>Loading ...</h1>
    return (
        <section>
            <h1>Form.name: {form.name}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={form.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={form.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <button type="submit">Create Person</button>
            </form>
            {people ? loaded() : loading()};
        </section>
    ) 
}