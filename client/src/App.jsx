import { useEffect, useState } from "react";

import axios from "axios";
import Posts from "./Posts";

export default function App() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/posts');
                console.log(JSON.stringify(res.data),"asdadasd")
                setPost(res.data);
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        };

        fetchData();
    });

    return (
        <div>
           <>
                {!post ?  "Loading...":post.map(elem=><Posts key={elem._id} data={elem}/>)}
           </>
            
        </div>
    );
}
