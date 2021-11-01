import React from "react";
import useFirestore from "../hooks/useFirestore";
import ImageGallery from "react-image-gallery";
// import { motion } from 'framer-motion';
const ImageGrid = () => {
  // const {docs}=useFirestore('images');
  const images = [];
  const { docs } = useFirestore();
  console.log(docs);
  if (docs.length)
    for (let i = 0; i < docs.length; i++) {
      images.push({
        original: docs[i].downloadURL,
        thumbnail: docs[i].downloadURL,
      });
    }
  console.log(images);
  return docs.length>0?<ImageGallery items={images} thumbnailPosition="right" />:null;
};
export default ImageGrid;
