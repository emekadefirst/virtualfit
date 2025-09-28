// src/pages/Dashboard.jsx
import React, { useState, useRef } from "react";
import { Camera, X, Upload, FileImage } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";

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
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const steps = [
    { title: formatMessage({ id: "dashboard.step1.title" }), desc: formatMessage({ id: "dashboard.step1.desc" }), key: "front" },
    { title: formatMessage({ id: "dashboard.step2.title" }), desc: formatMessage({ id: "dashboard.step2.desc" }), key: "left" },
    { title: formatMessage({ id: "dashboard.step3.title" }), desc: formatMessage({ id: "dashboard.step3.desc" }), key: "right" },
    { title: formatMessage({ id: "dashboard.step4.title" }), desc: formatMessage({ id: "dashboard.step4.desc" }), key: "outfit" },
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => ({
          ...prev,
          [steps[step - 1].key]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const openCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      setStream(mediaStream);
      setShowCamera(true);

      // Wait for video element to be ready
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert(formatMessage({ id: "dashboard.errorCamera" }));
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);

      const imageData = canvas.toDataURL("image/jpeg");
      setImages((prev) => ({
        ...prev,
        [steps[step - 1].key]: imageData,
      }));

      closeCamera();
    }
  };

  const closeCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const handleNext = () => {
    const currentImage = images[steps[step - 1].key];
    if (!currentImage) {
      alert(formatMessage({ id: "dashboard.errorNoImage" }));
      return;
    }

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log("Collected images:", images);
      setIsOpen(false);
      setStep(1);
      setImages({
        front: null,
        left: null,
        right: null,
        outfit: null,
      });
    }
  };

  const openFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleModalClose = () => {
    closeCamera();
    setIsOpen(false);
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
                    className="flex-1 py-3 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all"
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
                      src={currentImage}
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
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all"
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
              disabled={!currentImage}
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

            {/* Hidden elements */}
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