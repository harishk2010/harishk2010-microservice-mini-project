import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:3000/posts');
                setCount(res.data);
            } catch (error) {
                alert("Error fetching data: " + error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                {count ? JSON.stringify(count, null, 2) : "Loading..."}
            </h1>
        </div>
    );
}
