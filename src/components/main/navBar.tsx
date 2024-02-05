import { CalendarIcon } from "lucide-react";
import { CiSearch, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GiShinyOmega } from "react-icons/gi";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { ActivedLinks } from "./activedLinks";

export function Nav(){
    return(
        <section className="h-[100vh] w-[70px] border-r-[1.5px] border-dashed border-zinc-500
        flex-col justify-between px-[5px] py-[10px] flex">
            
            <div className="flex-col items-center gap-7 flex">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <GiShinyOmega className="w-full h-[60px] rounded-lg text-zinc-500 cursor-pointer"/>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 ml-3">
                        <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Color's Table</h4>
                            <p className="text-sm">
                                a website of colors - builded and sustained by 
                                <a href="https://linkedin.com/in/sid-gabriel-barbosa-moura-347474253" 
                                className="text-zinc-300" target="_blank"> @SidGabriel</a>
                            </p>
                            <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-sky-400/70">
                                Joined january 2024
                            </span>
                            </div>
                        </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                
                <Link href={'/'}>
                    <GoHome className="w-full h-[60px] rounded-full text-zinc-500 cursor-pointer p-4 hover:bg-zinc-800 transition-all duration-300"/>
                </Link>
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <CiSearch className="w-full h-[60px] rounded-full text-zinc-500 cursor-pointer p-4 hover:bg-zinc-800 transition-all duration-300"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 ml-3">
                        <DropdownMenuLabel className="text-zinc-200">Colors</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-zinc-600"/>
                        
                        <ActivedLinks href={'/blue'}>
                            Blue
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/red'}>
                            Red
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/green'}>
                            Green
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/yellow'}>
                            Yellow
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/orange'}>
                            Orange
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/purple'}>
                            Purple
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/pink'}>
                            Pink
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/grey'}>
                            grey
                        </ActivedLinks>
                        
                        <ActivedLinks href={'/brown'}>
                            Brown
                        </ActivedLinks>

                    </DropdownMenuContent>    
                </DropdownMenu>
            </div>

            <div className="flex-col items-center gap-1 flex">
                <Link href={'https://linkedin.com/in/sid-gabriel-barbosa-moura-347474253'} target="_blank">
                    <CiLinkedin className="w-full h-[60px] rounded-full text-zinc-500 cursor-pointer p-3 
                    hover:bg-zinc-800 hover:text-zinc-300 hover:p-[10px] transition-all duration-300"/>
                </Link>
                <Link href={'https://github.com/sidgabrielmoura'} target="_blank">
                    <FaGithub className="w-full h-[60px] rounded-full text-zinc-500 cursor-pointer p-4 
                    hover:bg-zinc-800 hover:text-zinc-300 hover:p-[14px] transition-all duration-300"/>
                </Link>
            </div>
        </section>
    )
}