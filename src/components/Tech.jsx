import { RiReactjsLine } from "react-icons/ri"
import { SiMultisim } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { FaGit } from "react-icons/fa"
import { SiPytorch } from "react-icons/si"

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4 ">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPytorch className="text-7xl text-orange-600 "/*style={{color: '#f80000'}}*//>
                
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMultisim className="text-7xl" style={{color: '#8870b8'}}/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className="text-7xl "style={{color: '#F1502F'}}/>
                
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrOracle className="text-7xl "style={{color: '#f80000'}}/>

            </div>
        </div>
      
    </div>
  )
}

export default Tech
