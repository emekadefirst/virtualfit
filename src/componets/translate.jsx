import React, { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Load Google Translate script
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ko",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }}></div>;
}
