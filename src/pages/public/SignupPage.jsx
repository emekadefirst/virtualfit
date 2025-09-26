export default function SignupPage() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/40 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50/60 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
                </div>

                <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl w-full max-w-md p-8 border border-gray-100">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
                            Join VirtualFit
                        </h1>
                        <p className="text-gray-600">
                            Start your virtual fashion journey
                        </p>
                    </div>

                    <div className="space-y-3 mb-6">
                        <button className="w-full py-3 border-2 border-gray-200 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                    </div>

                    <div className="flex items-center my-6">
                        <hr className="flex-1 border-gray-200" />
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="First name"
                                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-gray-600 mt-6 text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-gray-900 font-semibold hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}