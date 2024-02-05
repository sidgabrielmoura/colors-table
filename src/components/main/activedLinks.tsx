"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenuItem } from "../ui/dropdown-menu"

type ActivedLinksProps = {
    href: string,
    children: React.ReactNode
}

export const ActivedLinks = ({href, children}: ActivedLinksProps) => {

    const pathName = usePathname()
    const isActive = pathName === href

    return(
        <Link href={href}>
            <DropdownMenuItem className={isActive ? 'bg-zinc-600 text-zinc-200' : 'bg-zinc-800'}>
                {children}
            </DropdownMenuItem>
        </Link>
    )
}