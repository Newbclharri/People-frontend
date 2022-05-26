import {useParams, useNavigate} from "react-router"; //this is why we npm i react-router:  useParams is a react hook.  Hooks are special react functions
import { useState } from "react";


export default function Show({people, updatePerson, deletePerson}){

    const {id} = useParams();

    const person = people.find(person => person._id === id); //fiter people array for a person object that contains a _id value == to id from params
    //the returned, filtered object is assigned to the parameter /variable person as seen in the JSX below

    const navigate = useNavigate();

    const [editForm, setEditForm] = useState(person);

    const handleChange = e => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        updatePerson(editForm, person._id);
        //redirect user back to index
        navigate("/")
    }

    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <button id="delete" type="submit">Update Person</button>
            </form>
        </div>
    )
}