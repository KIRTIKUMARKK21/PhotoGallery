import React from 'react';
import useFirestore from '../hooks/useFirestore';
// import { motion } from 'framer-motion';
const ImageGrid=()=>{

    // const {docs}=useFirestore('images');
    const {docs}=useFirestore();
    console.log(docs);
    return(
        <div className='img-grid'>
          {docs && docs.map(doc =>(
              <div className="imag-wrap" key={doc.id}>
                  <img src={doc.downloadURL} alt="uploaded pic"/>
              </div>    
          ))}
        </div>
    )

}
export default ImageGrid;