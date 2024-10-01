import React, { useEffect, useState } from 'react'

export  function Vouchers() {
  const url = 'http://10.10.5.156/cake4/rd_cake/vouchers/index.json?_dc=1724746579928&page=1&start=0&limit=100&token=b4c6ac81-8c7c-4802-b50a-0a6380555b50&sel_language=4_4&cloud_id=24';

  const [dataApi,setDataApi]=useState()
        // Use the fetch API to get the data
        useEffect(()=>{
          getData()
        },[])
        useEffect(()=>{
          console.log(dataApi);
          
        },[dataApi])
   const getData=async()=>{
    fetch(url)
            .then(response => {
                // Check if the request was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON data from the response
                return response.json();
            })
            .then(data => {
              setDataApi(data)
            })
            .catch(error => {
                // Log any errors if the fetch request fails
                console.error('There was a problem with the fetch operation:', error);
            });
   }
  return (
    <div>
      <h1>Home</h1>
      <h2>items</h2>
      <ul>
      {dataApi?.items.map((data,index)=>{
        return <li key={index}>{data?.id}</li>
      })}
      </ul>
      <h2>totalCount</h2>
      <p>
      {dataApi?.totalCount}
      </p>
      <h2>meta</h2>
      <p>
      {dataApi?.metaData?.total}
      </p>
    </div>
  )
}

export default Vouchers