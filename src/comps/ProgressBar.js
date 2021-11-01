// import React from 'react';
import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
// import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const {url,progress}=useStorage(file);
  useEffect(()=>{
    if(url){
      setFile(null);

    }
  },[url,setFile])
  // useStorage(file);
  console.log(url,progress);
  return (
      <div className="progress-bar" style={{width:progress+"%"}}></div>
  );
} 

export default ProgressBar;