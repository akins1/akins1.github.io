
export default function Window() {

    return (
    <div draggable className="block border border-black">
        <div className="w-full h-8 bg-slate-500">
            HEADER
        </div>
        <div className="w-full h-full bg-slate-200">
            CONTENT
        </div>
    </div>    
    )
}