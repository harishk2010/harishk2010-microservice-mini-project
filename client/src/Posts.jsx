import React from 'react'

const Posts = ({data}) => {
    const {id,title}=data
    console.log(data,"props")
  return (
    <div class="bg-blue-600 w-[100px] h-[100px] flex flex-col justify-center items-center m-5 " >
        <h1 class="font-semibold text-blue-50 ">{title}</h1>
        <p>id: {id}</p>
    </div>
  )
}

export default Posts