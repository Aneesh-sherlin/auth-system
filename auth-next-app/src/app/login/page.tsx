export default function LoginPage() {
    return <main className="bg-gradient-to-br from-teal-300 to-sky-300 flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                
                <div>
                    <button type="submit" className="w-full py-2 px-4 bg-gradient-to-br from-teal-300 to-sky-300 text-white rounded  ">Login</button>
                </div>
            </form>
        </div>
    </main>
}
