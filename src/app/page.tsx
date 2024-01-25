"use client"

import Window from "@/components/Window"
import BasicSamplerCore from "@/daw-core/basic-sampler/BasicSamplerCore"
import BasicSynthCore from "@/daw-core/basic-synth/BasicSynthCore"
import BasicSynthUI from "@/daw-core/basic-synth/BasicSynthUI"
import { DawContext } from "@/daw/DawContext"
import Link from "next/link"

export default function Home() {
  const dawContext = new DawContext();


  return (
    <main className="flex min-h-screen bg-slate-950 text-slate-200 flex-col items-center justify-between p-24">
        {/* <BasicSynthUI /> */}
        <a href={"https://drive.google.com/drive/u/2/folders/14mv5Ox4gap9GmoIwdN6bRfKwVxnfUpcB"}>Assignment 1</a>
        <Link href={"/assignment2"}>Assignment 2</Link>

    </main>
  )
}
