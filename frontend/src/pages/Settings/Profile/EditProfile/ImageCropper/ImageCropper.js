import React from "react";
import CropSlider from "./CropSlider/CropSlider";
import styles from "./ImageCropper.module.css";
import Cropper from "react-easy-crop";

export const ImageCropper = () => {
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  return (
    <div className={styles.background}>
      <div className={styles.imageCropperHolder}>
        <div className={styles.imageCropper}></div>
        <div className={styles.imageCropperSelectorsContainer}>
          <CropSlider />
        </div>
        <div className={styles.cropperButtons}>
          <button className={styles.cropperButton}>Cancel</button>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            className={styles.fileSelector}
          />
          <button
            className={styles.cropperButton}
            onClick={triggerFileSelectPopup}
          >
            Select Image
          </button>
          <button className={styles.cropperButton}>Save</button>
        </div>
      </div>
    </div>
  );
};
