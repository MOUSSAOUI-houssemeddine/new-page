import React, { useContext, useState, useEffect } from 'react';
import { NurseDataContext } from '../../Layout/NurseLayout';
import axios from 'axios';
import NurseInfosSection from '../../components/nurseProfile/nurseInfosPage/NurseInfosSection';

const NurseInfosPage = () => {

  const token = localStorage.getItem('token');
  const { setNurseData } = useContext(NurseDataContext);

    useEffect(() => {
  axios.get('http://localhost:3000/nurses/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => { 
    setNurseData(response.data);
    //console.log("from nurse profile infos", response.data);
  }).catch((error) => {
    console.log("from prifile error ", error);
  });
  }, []);



  return (
    <div className='fade-in'>
      <NurseInfosSection />
    </div>
  )
}

export default NurseInfosPage
