import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { set, ref } from "firebase/database";
import {  db } from "../../firebase";

function AddStudent() {
  const [Name, setName] = useState("");
  const [ID, setID] = useState();
  const [Number, setNumber] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    set(ref(db, "student/" + ID), {
      Number: Number,
      Name: Name,
    })
    .then( () =>  navigate('/dashBoard/studentList'))
    .catch((error) => {
      console.error('Form submission failed:', error);
  });
}
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-1/3 ml-32 mt-10"
      >
        <input
          className="py-1.5 px-4 text-black  rounded-md"
          // value={ID}
          onChange={(e) => setID(e.target.value)}
          type="text"
          placeholder="ID"
        />
        <input
          className="py-1.5 px-4 text-black  rounded-md"
          // value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          className="py-1.5 px-4 text-black  rounded-md"
          // value={Number}
          onChange={(e) => setNumber(e.target.value)}
          type="Number"
          placeholder="Number"
        />
        <button
          type="submit"
          className="bg-black rounded-md p-2 font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
