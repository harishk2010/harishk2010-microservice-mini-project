import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Posts = ({ data }) => {

  const { id, title } = data;
  
  let comment = useRef("");
  const [cmts,setCmts]=useState([])
  console.log(cmts)
  useEffect(()=>{
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/comment/${id}`);
        setCmts(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
   
  },[id])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const content = { postId: id, content: comment.current.value };
    
    await axios
      .post("http://localhost:2000/comment", content)
      .then((data) => setCmts(data.data));
  };

  return (
    <div className="bg-blue-600  h-[100px] flex flex-col justify-center items-center m-5 ">
      <h1 className="font-semibold text-blue-50 ">{title}</h1>
      <p>id: {id}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={comment} placeholder="comment...." />
        <button className="bg-white m-2 p-1 rounded-md" type="submit">
          add
        </button>
        <>
        {
          !cmts? "":cmts.map(data=><p>{data.content}</p>)

        }
        </>
      </form>
    </div>
  );
};

export default Posts;
