// src/pages/public/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative bg-white py-24 md:py-32 px-6 text-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/40 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50/60 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900 max-w-5xl mx-auto tracking-tight">
            <FormattedMessage id="hero.title" />{" "}
            <span className="text-gray-600 font-light italic">
              <FormattedMessage id="hero.subtitle" />
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 font-light leading-relaxed">
            <FormattedMessage id="hero.description" />
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FormattedMessage id="hero.startButton" />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <FormattedMessage id="hero.signInButton" />
            </button>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group p-8 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                <FormattedMessage id="gallery.item1.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="gallery.item1.desc" />
              </p>
            </div>

            <div className="group p-8 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zM9 10h6M9 14h6"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                <FormattedMessage id="gallery.item2.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="gallery.item2.desc" />
              </p>
            </div>

            <div className="group p-8 bg-white/70 backdrop-blur-sm border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                <FormattedMessage id="gallery.item3.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="gallery.item3.desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
              <img
                src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_web_AI_replace_S3_feature_img_03_42c9cd98d0.jpg"
                alt={<FormattedMessage id="about.imageAlt" />}
                className="rounded-3xl shadow-2xl w-[464px] h-[325px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <FormattedMessage id="about.label" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              <FormattedMessage id="about.title" />
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <FormattedMessage id="about.p1" />
              </p>
              <p>
                <FormattedMessage id="about.p2" />
              </p>
              <p className="text-gray-900 font-semibold">
                <FormattedMessage id="about.p3" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 mb-6">
            <FormattedMessage id="features.label" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            <FormattedMessage id="features.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            <FormattedMessage id="features.description" />
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                <FormattedMessage id="features.feature1.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="features.feature1.desc" />
              </p>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                <FormattedMessage id="features.feature2.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="features.feature2.desc" />
              </p>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                <FormattedMessage id="features.feature3.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="features.feature3.desc" />
              </p>
            </div>

            <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gray-900 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3M7 15h2m4 0h2m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v11a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                <FormattedMessage id="features.feature4.title" />
              </h4>
              <p className="text-gray-600 leading-relaxed">
                <FormattedMessage id="features.feature4.desc" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <FormattedMessage id="gallery.label" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            <FormattedMessage id="gallery.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            <FormattedMessage id="gallery.description" />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://cdn.shopify.com/s/files/1/0340/9644/7533/files/Cuffing_Season_Wide_Leg_Denim_480x480.jpg?v=1733161639"
                alt={<FormattedMessage id="gallery.item1.title" />}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg mb-2">
                    <FormattedMessage id="gallery.item1.title" />
                  </h4>
                  <p className="text-gray-200 text-sm">
                    <FormattedMessage id="gallery.item1.desc" />
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://assets.vogue.com/photos/64c2bbe1d9567128b71301f8/master/w_2560%2Cc_limit/NAP_HSCampaign_FinalRetouch_CrisFragkou_7.jpg"
                alt={<FormattedMessage id="gallery.item2.title" />}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg mb-2">
                    <FormattedMessage id="gallery.item2.title" />
                  </h4>
                  <p className="text-gray-200 text-sm">
                    <FormattedMessage id="gallery.item2.desc" />
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src="https://www.beeglee.in/cdn/shop/articles/what-is-the-most-trending-in-womens-clothing-fashion-347447.jpg?v=1706793131&width=2048"
                alt={<FormattedMessage id="gallery.item3.title" />}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg mb-2">
                    <FormattedMessage id="gallery.item3.title" />
                  </h4>
                  <p className="text-gray-200 text-sm">
                    <FormattedMessage id="gallery.item3.desc" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 mb-6">
            <FormattedMessage id="video.label" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            <FormattedMessage id="video.title" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            <FormattedMessage id="video.description" />
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_web_face_swap_S1_video_01_9ff8ea7c3e.mp4"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;