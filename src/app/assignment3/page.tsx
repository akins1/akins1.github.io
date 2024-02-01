import BasicSynthCore from "@/daw-core/basic-synth/BasicSynthCore";
import PianoRoll from "@/daw-core/piano-roll/PianoRoll";
import { DawContext } from "@/daw/DawContext";


export default function Home() {
    //const dawContext = new DawContext();
  
  
    return (
      <main className="flex min-h-screen bg-slate-950 text-slate-500 flex-col items-center justify-between p-24">
          {/* <BasicSynthUI /> */}
          
        <BasicSynthCore />

  
      </main>
    )
  }