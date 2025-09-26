import { useState } from "react";
import { Users, CreditCard, Settings, Archive, TrendingUp, Activity, CheckCircle, XCircle } from "lucide-react";

export default function AdminDashboard() {
    const [active, setActive] = useState("users");

    const dummyUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", tryons: "5" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", tryons: "5" },
    ];

    const dummySubscriptions = [
        { id: "SUB001", user: "John Doe", plan: "Pro", status: "Active" },
        { id: "SUB002", user: "Jane Smith", plan: "Basic", status: "Expired" },
    ];

    const dummyPayments = [
        { id: "PAY001", user: "John Doe", amount: "$29.99", status: "Success" },
        { id: "PAY002", user: "Jane Smith", amount: "$9.99", status: "Failed" },
    ];

    const menuItems = [
        { key: "users", label: "Users", icon: <Users size={20} /> },
        { key: "account settings", label: "Account Settings", icon: <Settings size={20} /> },
        { key: "subscription", label: "Subscription", icon: <Archive size={20} /> },
        { key: "payments", label: "Payments", icon: <CreditCard size={20} /> },
    ];

    const stats = [
        { 
            title: "Total Users", 
            value: dummyUsers.length, 
            icon: <Users size={24} />,
            trend: "+12%",
            color: "text-blue-600"
        },
        { 
            title: "Subscriptions", 
            value: dummySubscriptions.length, 
            icon: <Archive size={24} />,
            trend: "+8%",
            color: "text-purple-600"
        },
        { 
            title: "Credits Used", 
            value: dummyPayments.length, 
            icon: <TrendingUp size={24} />,
            trend: "+23%",
            color: "text-green-600"
        },
        { 
            title: "System Status", 
            value: "Active", 
            icon: <Activity size={24} />,
            trend: "100%",
            color: "text-emerald-600"
        },
    ];

    return (
        <div className="flex min-h-screen bg-white">
            
            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                    {stat.trend}
                                </span>
                            </div>
                            <h4 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h4>
                            <p className="text-3xl font-bold text-black">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Content Sections */}
                {active === "users" && (
                    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        <Users size={20} className="text-gray-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Users Management</h3>
                                </div>
                                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                                    Add User
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="text-left p-4 font-semibold text-gray-700">ID</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Name</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Email</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Try-Ons</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyUsers.map((user) => (
                                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium">{user.id}</td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <span className="font-medium">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-600">{user.email}</td>
                                            <td className="p-4">
                                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                                    {user.tryons}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <button className="text-gray-600 hover:text-black transition-colors">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {active === "subscription" && (
                    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        <Archive size={20} className="text-gray-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Subscription Management</h3>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="text-left p-4 font-semibold text-gray-700">ID</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">User</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Plan</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummySubscriptions.map((sub) => (
                                        <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium">{sub.id}</td>
                                            <td className="p-4 font-medium">{sub.user}</td>
                                            <td className="p-4">
                                                <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                                                    {sub.plan}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`flex items-center space-x-2 ${
                                                    sub.status === 'Active' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                    {sub.status === 'Active' ? 
                                                        <CheckCircle size={16} /> : 
                                                        <XCircle size={16} />
                                                    }
                                                    <span className="font-medium">{sub.status}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {active === "payments" && (
                    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 rounded-lg">
                                        <CreditCard size={20} className="text-gray-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Payment History</h3>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="text-left p-4 font-semibold text-gray-700">ID</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">User</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Amount</th>
                                        <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyPayments.map((payment) => (
                                        <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 font-medium">{payment.id}</td>
                                            <td className="p-4 font-medium">{payment.user}</td>
                                            <td className="p-4 font-bold text-black">{payment.amount}</td>
                                            <td className="p-4">
                                                <span className={`flex items-center space-x-2 ${
                                                    payment.status === 'Success' ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                    {payment.status === 'Success' ? 
                                                        <CheckCircle size={16} /> : 
                                                        <XCircle size={16} />
                                                    }
                                                    <span className="font-medium">{payment.status}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {active === "account settings" && (
                    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <Settings size={20} className="text-gray-600" />
                                </div>
                                <h3 className="text-xl font-bold text-black">Account Settings</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="max-w-2xl space-y-6">
                                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                                    <h4 className="text-lg font-semibold text-black mb-4">System Configuration</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-700">Email Notifications</span>
                                            <button className="w-12 h-6 bg-black rounded-full p-1">
                                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-700">Auto Backup</span>
                                            <button className="w-12 h-6 bg-gray-300 rounded-full p-1">
                                                <div className="w-4 h-4 bg-white rounded-full"></div>
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-gray-700">Maintenance Mode</span>
                                            <button className="w-12 h-6 bg-gray-300 rounded-full p-1">
                                                <div className="w-4 h-4 bg-white rounded-full"></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}