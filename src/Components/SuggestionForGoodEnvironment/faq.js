

import EnvironmentalSuggestion from "./Suggestion";

export default function FAQ() {
    return (
        <div className="py-24 bg-green-200">
            <h1 className="text-4xl font-bold text-center mb-20">Frequently Asked Questions</h1>
            <div className="flex justify-center ">
            <div className="w-5/12 px-10">
                <EnvironmentalSuggestion />
            </div>
            <div className="w-5/12 px-10 rounded-full">
                <img className="" src="https://images.unsplash.com/photo-1611003229186-80e40cd54966?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhYnklMjBhbmltYWxzfGVufDB8fDB8fHww" alt="" />
            </div>
            </div>
        </div>
    )
}