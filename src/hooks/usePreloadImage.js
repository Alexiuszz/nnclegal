import { useState, useEffect } from "react";

export const useImagePreloader = (imageUrls) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    });

    promises.forEach((promise) => {
      promise
        .then((img) => {
          setImages((prevImgs) => [...prevImgs, img]);
        })
        .catch((error) => {
          console.error("Error preloading img:", error);
        });
    });
  }, [imageUrls]);

  const isImageLoaded = (imageUrl) => {
    const loadedImage = images.find(
      (image) => image.src === imageUrl
    );
    return Boolean(loadedImage);
  };

  return [images, isImageLoaded];
};

export default useImagePreloader;
