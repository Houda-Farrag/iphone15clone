import React, { useEffect, useState } from 'react'
import './Voucher.css'
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
  return <>
    <div>
     
      <div className='table-container'>
    
      <h1>Vouchers</h1>
      <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Status</th>
                    <th>Last Accept Time</th>
                    <th>Last Reject Time</th>
                    <th>Cloud ID</th>
                    <th>Created</th>
                    <th>Modified</th>
                    <th>Password</th>
                    <th>Profile</th>
                    <th>Realm</th>
                    <th>Last Seen Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {dataApi?.items.map((data,index)=>{
            return <tr>
            <td>{data?.id}</td>
            <td>{data?.name}</td>
            <td>{data?.batch}</td>
            <td>{data?.status}</td>
            <td>{data?.last_accept_time}</td>
            <td>{data?.last_reject_time}</td>
            <td>{data?.cloud_id}</td>
            <td>{new Date(data?.created).toLocaleDateString()}</td>
            <td>{data?.id}</td>
            <td>{data?.id}</td>
            <td>{data?.id}</td>
            <td>{data?.id}</td>
            <td>{data?.id}</td>
            <td>
                <button className="update-btn">Update</button>
                <button className   ="delete-btn">Delete</button>
            </td>
            </tr>
            })}
            {/* <li key={index}>{data?.id}</li> */}
               
            </tbody>
        </table>
    </div>
   
      <h2>totalCount</h2>
      <p>
      {dataApi?.totalCount}
      </p>
      <h2>meta</h2>
      <p>
      {dataApi?.metaData?.total}
      </p>
    </div>

  </>
}

export default Vouchers