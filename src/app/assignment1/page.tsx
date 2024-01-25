"use client"

import Window from "@/components/Window"
import BasicSamplerCore from "@/daw-core/basic-sampler/BasicSamplerCore"
import BasicSynthCore from "@/daw-core/basic-synth/BasicSynthCore"
import BasicSynthUI from "@/daw-core/basic-synth/BasicSynthUI"
import { DawContext } from "@/daw/DawContext"

export default function Home() {
  const dawContext = new DawContext();


  return (
    <main className="flex min-h-screen bg-slate-950 text-slate-500 flex-col items-center justify-between p-24">
        {/* <BasicSynthUI /> */}
        <BasicSynthCore dawCtx={dawContext} />
        <BasicSamplerCore dawCtx={dawContext} />

    </main>
  )
}