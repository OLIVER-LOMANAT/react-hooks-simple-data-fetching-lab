// create your App component here

import { response } from "msw";
import { use, useEffect, useState } from "react";
import { data } from "../mocks/data";

export default function App() {
    
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => setImage(data.message))
    }, [])

    if(!image) return <p>Loading...</p>

    return (
        <div>
          <img src={image} alt="A Random Dog"/>
        </div>
    )
}