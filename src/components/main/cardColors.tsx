'use client'
import '../../app/globals.css'
import { toast } from "sonner"

type CardsProps = {
    hexadecimalFrom: string,
    hexadecimalVia?: string,
    hexadecimalTo: string,
    hexadecimal1: string,
    hexadecimal2?: string,
    hexadecimal3: string,
    hexadecimal1bg: string,
    hexadecimal2bg?: string,
    hexadecimal3bg: string,
    corTexto1: string,
    corTexto2?: string,
    corTexto3: string,
}

export function CardColors({ hexadecimalFrom, hexadecimalVia, hexadecimalTo, hexadecimal1, hexadecimal2, hexadecimal3, corTexto1, corTexto2, corTexto3,
hexadecimal1bg, hexadecimal2bg, hexadecimal3bg }: CardsProps) {
    
    const copiaHexadecimal = (hex: string) => {
        navigator.clipboard.writeText(hex)
    }

    return(
        <>
            <div className="flex items-center justify-center
            lg:w-[280px] lg:h-[150px]
            md:w-[250px] md:h-[150px]
            min-[320px]:w-[70vw] min-[320px]:h-[100px]">

                <div className='rounded-[10px] border-2 border-zinc-500 border-dashed relative
                hover:w-full transition-all duration-300 cursor-pointer
                lg:w-[250px] lg:h-[150px]
                md:w-[250px] md:h-[150px]
                min-[320px]:w-[70vw] min-[320px]:h-[100px]' id='cardContainer'>
                    
                    <div className={`w-full h-full bg-gradient-to-r ${hexadecimalFrom} ${hexadecimalVia} ${hexadecimalTo} rounded-[10px]
                    transition-opacity duration-500 absolute
                    min-[1250px]:block
                    min-[320px]:hidden`} id='cardImage'/>
                    
                    <div className='w-full h-full flex rounded-[10px]'>
                        
                        <button className={`h-full ${hexadecimal1bg} w-full rounded-s-[10px] ${corTexto1} flex justify-center items-center font-bold 
                        hover:border`} onClick={() => {
                            copiaHexadecimal(hexadecimal1)
                            toast(`copiado para clipboard ✅`,  {
                            description: `${hexadecimal1}`,
                            action: {
                                label: "Fechar",
                                onClick: () => {},
                            }})
                        }}>

                            <span className='
                            lg:text-[15px]
                            md:text-[12px]
                            min-[320px]:text-[12px]'>{hexadecimal1}</span>
                        </button>

                        <button className={hexadecimal2bg ? `h-full ${hexadecimal2bg} w-full ${corTexto2} flex justify-center items-center font-bold
                        hover:border` : 'hidden'}  onClick={() => {
                            copiaHexadecimal(hexadecimal2!)
                            toast(`copiado para clipboard ✅`,  {
                            description: `${hexadecimal2}`,
                            action: {
                                label: "Fechar",
                                onClick: () => {},
                            }})
                        }}>

                            <span className='
                            lg:text-[15px]
                            md:text-[12px]
                            min-[320px]:text-[12px]'>{hexadecimal2}</span>
                        </button>

                        <button className={`h-full ${hexadecimal3bg} w-full rounded-e-[10px] ${corTexto3} flex justify-center items-center font-bold
                        hover:border`}  onClick={() => {
                            copiaHexadecimal(hexadecimal3)
                            toast(`copiado para clipboard ✅`,  {
                            description: `${hexadecimal3}`,
                            action: {
                                label: "Fechar",
                                onClick: () => {},
                            }})
                        }}>

                            <span className='
                            lg:text-[15px]
                            md:text-[12px]
                            min-[320px]:text-[12px]'>{hexadecimal3}</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
