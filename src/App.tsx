import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [blogs, setBlogs] = useState<any>([])
  const [title, setTitle] = useState<string>("")
   console.log(blogs);

const handleSubmit = async() => {
  try{
  const response = await axios.post("https://63d801935dbd723244319be0.mockapi.io/api/v1/blog", 
  {title});
  setBlogs([...blogs, response.data]);

  }
  catch (error:any) {
    console.log(error.message)
  }
}

  //Fetching the data from the api
 const grabData = async () => {
    try{
     const response = await axios.get("https://63d801935dbd723244319be0.mockapi.io/api/v1/blog");
    setBlogs(response.data)
   }

  
   catch (error:any) {
     console.log(error.message)
  }}

  useEffect(() => {
    grabData()
}, [])

  return (
    <div>
    <div
    style={{
      paddingTop:'2rem',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    
    }}
    >
      <input
      type="text"
      placeholder='Search for blog'
      name='title'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
       />
    </div>
    <button
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      paddingTop: "none",
      marginLeft:"50%"
    }}
    onClick={handleSubmit}
    >Submit
    </button>
     <>
     {blogs.length && 
     blogs.map((blog:any) => (
        <div>
          <h2>{blog.title}</h2>
        </div>
      ))}
     </>
    </div>

  )
}

export default App