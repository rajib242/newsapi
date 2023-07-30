import {React,useEffect,useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const FetchData =({cat})=>{
   const [Data,setData]= useState("");
    const fetchData = async () =>{
       await axios.get(
        cat
           ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c27456bb30624ca5a30ad1b343ffe1ed`
           : "https://newsapi.org/v2/top-headlines?country=in&apiKey=c27456bb30624ca5a30ad1b343ffe1ed"
        ).then((res)=> setData(res.data.articles));
    }

useEffect(()=>{
   fetchData();
},[cat]);

  return(
     <div className="container my-4">
      <h3 className=" d-flex justify-content-center align-items-center"><u>TOP HEADLINES</u></h3>

         <div className=" container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>
              {Data 
                ? Data.map((items, index) => (
                    <>
                       <div className="container my-3 p-3" style={{width:"600px",boxShadow:"4px 4px 20px silver", borderRadius:"12px",border:"2px solid gray"}}>

                          <h5 className="my-2" key={index}>{items.title}</h5>

                            <div className="d-flex justify-content-center align-items-center">
                                   <img  src={items.urlToImage} alt="404 Image Not Found" className="img-fluid" style={{width: "100%",height: "300px",objectFit:"cover"}}/>
                           </div>

                           <p className="my-1" >{items.content}</p>
                           <Link to={items.url} target="_blank">View More</Link>
                       </div>
                   </>
                 ))
              : "Loading..."}
          </div>

     </div>
  );
}

export default FetchData;