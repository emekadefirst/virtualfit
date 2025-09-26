import React, { useState, useRef, useEffect } from "react";

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (open) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [open]);

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left flex justify-between items-center py-5 focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="transition-all duration-500 ease-in-out overflow-hidden"
            >
                <p className="pb-5 text-gray-600">{answer}</p>
            </div>
        </div>
    );
};


const SupportPage = () => {
    return (
        <section className="relative bg-white py-24 md:py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/30"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/40 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50/60 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                    We’re Here to <span className="text-gray-600 italic">Help</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
                    Have questions about VirtualFit? Whether it’s technical help, billing, or getting started,
                    our team is ready to support you every step of the way.
                </p>

                <div className="grid md:grid-cols-3 gap-10 text-left">
                    <div className="p-8 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-circle-question text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">FAQs</h3>
                            <p className="text-gray-600 mb-6">
                                Browse answers to the most common questions about VirtualFit, from uploading your photo
                                to trying on outfits.
                            </p>
                        </div>
                        <a href="/faq" className="text-indigo-600 font-semibold hover:underline mt-auto">
                            Explore FAQs →
                        </a>
                    </div>

                    <div className="p-8 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-phone text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Contact Us</h3>
                            <p className="text-gray-600 mb-6">
                                Can’t find what you’re looking for? Reach out to our friendly support team directly,
                                available 24/7.
                            </p>
                        </div>
                        <a href="mailto:support@virtualfit.com" className="text-indigo-600 font-semibold hover:underline mt-auto">
                            support@virtualfit.com
                        </a>
                    </div>

                    <div className="p-8 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fa-solid fa-user-group text-2xl"></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">Community</h3>
                            <p className="text-gray-600 mb-6">
                                Join our growing VirtualFit community to share styling tips, earn rewards, and discover
                                inspiration from other users.
                            </p>
                        </div>
                        <a href="/community" className="text-indigo-600 font-semibold hover:underline mt-auto">
                            Join the Community →
                        </a>
                    </div>
                </div>


                <div className="mt-24 bg-gray-50 rounded-3xl py-12 px-8 shadow-lg max-w-4xl mx-auto text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <FAQItem
                        question="How does VirtualFit work?"
                        answer="Upload your face photos, and our AI automatically generates try-on previews across supported clothing stores."
                    />
                    <FAQItem
                        question="Is my data secure?"
                        answer="Yes. We use strong encryption and never share your personal images without your consent."
                    />
                    <FAQItem
                        question="Do I need to install anything?"
                        answer="Nope! VirtualFit works directly in your browser or in partner shopping apps through our API."
                    />
                    <FAQItem
                        question="Can I try it for free?"
                        answer="Yes, we offer a free plan with limited try-ons so you can test VirtualFit before upgrading."
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportPage;
