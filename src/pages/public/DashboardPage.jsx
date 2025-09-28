// src/pages/Dashboard.jsx
import React, { useState, useRef } from "react";
import { Camera, X, Upload, FileImage, Download } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";
import { UploadFile } from "../../services/fileUpload";
import { generateImage } from "../../services/synthensize";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [images, setImages] = useState({
    front: null,
    left: null,
    right: null,
    outfit: null,
  });
  const [generatedImage, setGeneratedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const steps = [
    { title: formatMessage({ id: "dashboard.step1.title" }), desc: formatMessage({ id: "dashboard.step1.desc" }), key: "front" },
    { title: formatMessage({ id: "dashboard.step2.title" }), desc: formatMessage({ id: "dashboard.step2.desc" }), key: "left" },
    { title: formatMessage({ id: "dashboard.step3.title" }), desc: formatMessage({ id: "dashboard.step3.desc" }), key: "right" },
    { title: formatMessage({ id: "dashboard.step4.title" }), desc: formatMessage({ id: "dashboard.step4.desc" }), key: "outfit" },
  ];

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        const { url, id } = await UploadFile(file, formatMessage);
        setImages((prev) => ({
          ...prev,
          [steps[step - 1].key]: { url, id },
        }));
      
      } catch (error) {
        // Error toast handled in UploadFile
      } finally {
        setIsUploading(false);
      }
    }
  };

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      setStream(mediaStream);
      setShowCamera(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      console.error("Error accessing camera:", error);
      toast.error(formatMessage({ id: "dashboard.errorCamera" }));
    }
  };

  const capturePhoto = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      setIsUploading(true);
      try {
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);

        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg"));
        const file = new File([blob], `${steps[step - 1].key}.jpg`, { type: "image/jpeg" });
        const { url, id } = await UploadFile(file, formatMessage);
        setImages((prev) => ({
          ...prev,
          [steps[step - 1].key]: { url, id },
        }));
       
        closeCamera();
      } catch (error) {
        // Error toast handled in UploadFile
      } finally {
        setIsUploading(false);
      }
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const handleNext = async () => {
    const currentImage = images[steps[step - 1].key];
    if (!currentImage) {
      toast.error(formatMessage({ id: "dashboard.errorNoImage" }));
      return;
    }

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setIsGenerating(true);
      try {
        const payload = {
          product_image: images.outfit ? { id: images.outfit.id, image_url: images.outfit.url } : { id: "", image_url: "" },
          front_image: images.front ? { id: images.front.id, image_url: images.front.url } : { id: "", image_url: "" },
          l_image: images.left ? { id: images.left.id, image_url: images.left.url } : { id: "", image_url: "" },
          r_image: images.right ? { id: images.right.id, image_url: images.right.url } : { id: "", image_url: "" },
          user_full_image: { id: "", image_url: "" }, // Not used
        };
        console.log(payload)
        const imageUrl = await generateImage(payload, formatMessage);
        if (imageUrl.status)
        setGeneratedImage(imageUrl);
        toast.success(formatMessage({ id: "generateImage.success" }));
        setIsOpen(false);
        setStep(1);
        setImages({
          front: null,
          left: null,
          right: null,
          outfit: null,
        });
      } catch (error) {
        // Error toast handled in generateImage
      } finally {
        setIsGenerating(false);
      }
    }
  };

  const openFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleModalClose = () => {
    closeCamera();
    setIsOpen(false);
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "generated-try-on.jpg";
      link.click();
    }
  };

  const currentImage = images[steps[step - 1]?.key];

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-8">
          <FormattedMessage id="dashboard.title" />
        </h1>
        <p className="text-gray-600 mb-8">
          <FormattedMessage id="dashboard.description" />
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
        >
          <FormattedMessage id="dashboard.startButton" />
        </button>
      </div>

      {generatedImage && (
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            <FormattedMessage id="dashboard.resultTitle" />
          </h2>
          <p className="text-gray-600 mb-6">
            <FormattedMessage id="dashboard.resultDescription" />
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <img
              src={generatedImage}
              alt={formatMessage({ id: "dashboard.compositeImageAlt" })}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <button
            onClick={handleDownload}
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
          >
            <Download className="w-5 h-5" />
            <FormattedMessage id="dashboard.downloadButton" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center px-4 md:px-0 justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold text-black mb-2">{steps[step - 1].title}</h2>
            <p className="text-gray-600 mb-6">{steps[step - 1].desc}</p>

            {showCamera ? (
              <div className="mb-6">
                <div className="w-full h-64 bg-black rounded-xl relative overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={capturePhoto}
                    disabled={isUploading || isGenerating}
                    className="flex-1 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <FormattedMessage id="dashboard.captureButton" />
                  </button>
                  <button
                    onClick={closeCamera}
                    className="flex-1 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all"
                  >
                    <FormattedMessage id="dashboard.cancelButton" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {currentImage ? (
                    <img
                      src={currentImage.url}
                      alt={formatMessage({ id: `dashboard.step${step}.title` })}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-center">
                      <FileImage className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">
                        <FormattedMessage id="dashboard.noImage" />
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4 mb-6">
                  <button
                    onClick={openFileUpload}
                    disabled={isUploading || isGenerating}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <Upload className="w-5 h-5" />
                    <FormattedMessage id="dashboard.uploadButton" />
                  </button>
                  <button
                    onClick={openCamera}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all"
                  >
                    <Camera className="w-5 h-5" />
                    <FormattedMessage id="dashboard.cameraButton" />
                  </button>
                </div>
              </>
            )}

            <button
              onClick={handleNext}
              disabled={!currentImage || isUploading || isGenerating}
              className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FormattedMessage id={step < steps.length ? "dashboard.nextButton" : "dashboard.finishButton"} />
            </button>

            <div className="mt-6 flex justify-center space-x-2">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    idx + 1 === step ? "bg-black" : images[steps[idx].key] ? "bg-gray-600" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>
      )}
    </div>
  );
}