import React, { useState } from "react";
import styles from "./ImageCropper.module.css";
import Cropper from "react-easy-crop";
import getCroppedImg from "./Utils/cropImage";

export const ImageCropper = ({
  setEndPictureUpload,
  setProfilePicture,
  setOpenCrop,
}) => {
  const inputRef = React.useRef();
  const [image, setImage] = useState(null);
  const triggerFileSelectPopup = () => inputRef.current.click();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedArea] = useState(null);
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files.length > 0 && event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const onDowload = async () => {
    console.log("On Download Clicked");
    const croppedImage = await getCroppedImg(image, croppedArea);
    // const croppedImage
    var reader = new FileReader();
    //Gives blob url
    reader.readAsDataURL(croppedImage);
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    var file = new File([croppedImage], "name");
    setEndPictureUpload(file);
    setOpenCrop(false);
  };

  return (
    <div className={styles.background}>
      <div className={styles.imageCropper}>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          className={styles.cropper}
        />
      </div>
      <div className={styles.nonCropImage}>
        <div className={styles.imageCropperSelectorsContainer}>
          <input
            type="range"
            className={styles.range}
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => {
              console.log(zoom);
              setZoom(e.target.value);
            }}
          />
        </div>
        <div className={styles.cropperButtons}>
          <button
            className={styles.cropperButton}
            onClick={() => setOpenCrop(false)}
          >
            Cancel
          </button>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            className={styles.fileSelector}
            onChange={onSelectFile}
          />
          <button
            className={styles.cropperButton}
            onClick={triggerFileSelectPopup}
          >
            Select Image
          </button>
          <button className={styles.cropperButton} onClick={onDowload}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
