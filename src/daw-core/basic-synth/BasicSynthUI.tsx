"use client"

export default function BasicSynthUI()
{
    return (
    <div className="w-[64rem] h-[32rem] rounded-md flex flex-col bg-slate-700 border-2 border-slate-500">

        <div className="w-full h-6 rounded-t-md bg-slate-500 justify-between flex px-1">
            <div className="text-white select-none font-semibold text-sm my-auto">
                Basic Synth
            </div>
            <div className="flex ">
                <div className="h-4 w-4 rounded-full my-auto cursor-pointer bg-green-600 hover:bg-green-700 border-2 border-slate-700"></div>
                <div className="h-4 w-4 rounded-full my-auto cursor-pointer bg-yellow-600 hover:bg-yellow-700 mx-1.5 border-2 border-slate-700"></div>
                <div className="h-4 w-4 rounded-full my-auto cursor-pointer bg-red-600 hover:bg-red-700 border-2 border-slate-700"></div>
            </div>
        </div>
        <div className="grow w-full space-y-1 bg-slate-800 p-1">
            <div className="w-[28rem] p-1.5 text-slate-400 text-sm font-semibold select-none h-[12rem] rounded-sm  border border-slate-600 bg-slate-700">
                
                LFO 1
            </div>
            <div className="w-[28rem] p-1.5 text-slate-400 text-sm font-semibold select-none h-[8.3rem] rounded-sm  border border-slate-500 bg-slate-600">
                <div>OSC 1</div>
                <div className="flex mt-1">
                    <div className="w-[6rem]  block">
                        <div className="w-[5rem] h-[5rem] rounded-sm bg-slate-700 mx-auto">
                            <div className="h-5 w-full text-slate-500 font-bold flex">
                                <div className="w-4 h-4 rounded-full border border-slate-500 ml-1 my-1">
                                    <div className="w-3 h-3 rounded-full bg-slate-300 ml-[1px] mt-[1.5px]"></div>
                                </div>
                                <div className="mt-[2.5px] ml-1">SINE</div>
                            
                            </div>
                            <div className="m-1 h-[3.25rem] bg-slate-800">

                            </div>
                        </div>
                        <div className="text-xs font-bold text-center"></div>
                    </div>
                    {/* <div className="w-[6rem] border boreder-white block">
                        <div className="w-[5rem] h-[5rem] bg-slate-700 mx-auto"></div>
                        <div className="text-xs font-bold text-center">SINE</div>
                    </div>
                    <div className="w-[6rem] border boreder-white block">
                        <div className="w-[5rem] h-[5rem] bg-slate-700 mx-auto"></div>
                        <div className="text-xs font-bold text-center">SINE</div>
                    </div>
                    <div className="w-[6rem] border boreder-white block">
                        <div className="w-[5rem] h-[5rem] bg-slate-700 mx-auto"></div>
                        <div className="text-xs font-bold text-center">SINE</div>
                    </div> */}
                    <div className="mx-auto">
                        <div>
                        <div className="rounded-full h-8 w-8 bg-slate-800 border border-slate-500 text-center pt-1.5">20</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}