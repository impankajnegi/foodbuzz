"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
 const [pickedImage, setPickedImage] =  useState();

  function handleImageChange(event){
    const file = event.target.files[0];

    if(!file)   { 
        setPickedImage(null);
    return;
     }

    const fileReader = new FileReader();
    fileReader.onload = () =>{
       setPickedImage( fileReader.result)
    }
    fileReader.readAsDataURL(file);
  }



  const imageInput = useRef();
  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No Image picked Yet!</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by the user"
            fill></Image>}
        </div>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpec"
          name={name}
          onChange={handleImageChange}
          required
        ></input>
        <button
          onClick={handlePickClick}
          className={classes.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
