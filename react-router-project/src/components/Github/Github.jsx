import { useEffect, useState } from "react";


const Github = ()=>{

    const [data, setData]=useState([])
useEffect(()=>{
    fetch("https://api.github.com/users/fomo-ash")
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setData(data)
    },[])
   

})

return (
    <>
     <h1>GitHub Profile</h1>
      {data.login ? (
        <div>
          <img src={data.avatar_url} alt={data.login} width="100" />
          <h2>{data.name}</h2>
          <p>{data.bio}</p>
          <p>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
  </>
)
}

export default Github