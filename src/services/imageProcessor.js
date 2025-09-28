// src/utils/imageProcessor.js

// Combine left, right, and front images into a single composite image
export async function combineImages(images, formatMessage) {
  try {
    // Create a canvas for the composite image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Load images asynchronously
    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // For cross-origin images, if applicable
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(formatMessage({ id: "imageProcessor.loadError" })));
        img.src = src;
      });

    const [frontImg, leftImg, rightImg] = await Promise.all([
      loadImage(images.front),
      loadImage(images.left),
      loadImage(images.right),
    ]);

    // Define dimensions for the composite image
    const imgWidth = 200; // Fixed width for each image
    const imgHeight = 200; // Fixed height for each image
    const spacing = 10; // Space between images
    const canvasWidth = imgWidth * 3 + spacing * 2; // 3 images side by side
    const canvasHeight = imgHeight; // Single row

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Draw face images (L, F, R) in a row
    ctx.drawImage(leftImg, 0, 0, imgWidth, imgHeight);
    ctx.drawImage(frontImg, imgWidth + spacing, 0, imgWidth, imgHeight);
    ctx.drawImage(rightImg, imgWidth * 2 + spacing * 2, 0, imgWidth, imgHeight);

    // Return the composite image as a Data URL
    return canvas.toDataURL("image/jpeg");
  } catch (error) {
    console.error("Image processing error:", error);
    throw new Error(formatMessage({ id: "imageProcessor.combineError" }));
  }
}