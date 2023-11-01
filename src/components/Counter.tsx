import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="flex flex-col items-center h-screen justify-center">
                <div className="text-6xl text-black-600 text-center mb-6">{count}</div>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={() => setCount((count) => count + 1)}>
                    Count +
                </button>
                <h2 className="mt-10 text-xl">
                    Let's build something great boyz ! 🫶
                </h2>
                <h3 className="mt-4">
                    <a href="https://github.com/mxrch">@mxrch</a>
                </h3>
            </div>
        </div>
    )
}
export default Counter;