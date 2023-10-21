import { useEffect, useState } from "react";




let Home = () => {

   
   
    useEffect(()=>{
      
     {
            callApi();
        } 
        
    },[])
    let callApi = async () => {
        //fetch is used to make api calls.
        let res = await fetch('https://dummyjson.com/products');
        let jsonResponse = await res.json();
        // console.log(jsonResponse);
        //Adding custom delay
    }
}

export default Home;