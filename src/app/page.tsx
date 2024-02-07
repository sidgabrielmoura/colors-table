import { Nav } from '@/components/main/navBar';
import '../app/globals.css'
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardColors } from '@/components/main/cardColors';
import ExtruturePageCard from '@/components/main/extrutureColorCardsPage';

export default function Home() {
  return (
    <>
      <ExtruturePageCard
        paletColors={
          <><CardColors hexadecimalFrom='from-indigo-500' hexadecimalVia='via-purple-500' hexadecimalTo='to-pink-500' hexadecimal1='#6366f1' hexadecimal2='#a855f7'
            hexadecimal3='#ec4899' hexadecimal1bg='bg-[#6366f1]' hexadecimal2bg='bg-[#a855f7]' hexadecimal3bg='bg-[#ec4899]' corTexto1='text-zinc-800'
            corTexto2='text-zinc-800' corTexto3='text-zinc-800' /><CardColors hexadecimalFrom='from-indigo-500' hexadecimalVia='via-sky-500' hexadecimalTo='to-emerald-500' hexadecimal1='#6366f1' hexadecimal2='#0EA5E9'
              hexadecimal3='#10B981' hexadecimal1bg='bg-[#6366f1]' hexadecimal2bg='bg-[#0ea5e9]' hexadecimal3bg='bg-[#10b981]' corTexto1='text-zinc-800'
              corTexto2='text-zinc-800' corTexto3='text-zinc-800' /><CardColors hexadecimalFrom='from-cyan-500' hexadecimalTo='to-blue-500' hexadecimal1='#06B6D4'
                hexadecimal3='#3B82F6' hexadecimal1bg='bg-[#06B6D4]' hexadecimal3bg='bg-[#3B82F6]' corTexto1='text-zinc-800'
                corTexto2='text-zinc-800' corTexto3='text-zinc-800' /><CardColors hexadecimalFrom='from-[#aa639c]' hexadecimalVia='via-[#803b74]' hexadecimalTo='to-[#55134b]' hexadecimal1='#aa639c' hexadecimal2='#803b74'
                  hexadecimal3='#55134b' hexadecimal1bg='bg-[#aa639c]' hexadecimal2bg='bg-[#803b74]' hexadecimal3bg='bg-[#55134b]' corTexto1='text-zinc-900'
                  corTexto2='text-zinc-300' corTexto3='text-zinc-300' /><CardColors hexadecimalFrom='from-[#c2de8c]' hexadecimalVia='via-[#b2ce7c]' hexadecimalTo='to-[#a2bd6d]' hexadecimal1='#c2de8c' hexadecimal2='#b2ce7c'
                    hexadecimal3='#a2bd6d' hexadecimal1bg='bg-[#c2de8c]' hexadecimal2bg='bg-[#b2ce7c]' hexadecimal3bg='bg-[#a2bd6d]' corTexto1='text-zinc-900'
                    corTexto2='text-zinc-900' corTexto3='text-zinc-900' /><CardColors hexadecimalFrom='from-[#ffd8d1]' hexadecimalVia='via-[#b08d87]' hexadecimalTo='to-[#60423d]' hexadecimal1='#ffd8d1' hexadecimal2='#b08d87'
                      hexadecimal3='#60423d' hexadecimal1bg='bg-[#ffd8d1]' hexadecimal2bg='bg-[#b08d87]' hexadecimal3bg='bg-[#60423d]' corTexto1='text-zinc-900'
                      corTexto2='text-zinc-100' corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#abae42]' hexadecimalTo='to-[#586000]' hexadecimal1='#abae42'
                        hexadecimal3='#586000' hexadecimal1bg='bg-[#abae42]' hexadecimal3bg='bg-[#586000]' corTexto1='text-zinc-900'
                        corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#cd2c18]' hexadecimalVia='via-[#ac1d10]' hexadecimalTo='to-[#8c0f08]' hexadecimal1='#cd2c18' hexadecimal2='#ac1d10'
                          hexadecimal3='#8c0f08' hexadecimal1bg='bg-[#cd2c18]' hexadecimal2bg='bg-[#ac1d10]' hexadecimal3bg='bg-[#8c0f08]' corTexto1='text-zinc-100'
                          corTexto2='text-zinc-100' corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#e08da9]' hexadecimalVia='via-[#b0627c]' hexadecimalTo='to-[#6c1c41]' hexadecimal1='#e08da9' hexadecimal2='#b0627c'
                            hexadecimal3='#6c1c41' hexadecimal1bg='bg-[#e08da9]' hexadecimal2bg='bg-[#b0627c]' hexadecimal3bg='bg-[#6c1c41]' corTexto1='text-zinc-900'
                            corTexto2='text-zinc-100' corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#ffffff]' hexadecimalVia='via-[#a0a0a0]' hexadecimalTo='to-[#393939]' hexadecimal1='#ffffff' hexadecimal2='#a0a0a0'
                              hexadecimal3='#393939' hexadecimal1bg='bg-[#ffffff]' hexadecimal2bg='bg-[#a0a0a0]' hexadecimal3bg='bg-[#393939]' corTexto1='text-zinc-900'
                              corTexto2='text-zinc-900' corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#fcbd57]' hexadecimalTo='to-[#df8c07]' hexadecimal1='#fcbd57'
                                hexadecimal3='#df8c07' hexadecimal1bg='bg-[#fcbd57]' hexadecimal3bg='bg-[#df8c07]' corTexto1='text-zinc-900'
                                corTexto3='text-zinc-100' /><CardColors hexadecimalFrom='from-[#8c433c]' hexadecimalVia='via-[#5f211e]' hexadecimalTo='to-[#320000]' hexadecimal1='#8c433c' hexadecimal2='#5f211e'
                                  hexadecimal3='#320000' hexadecimal1bg='bg-[#8c433c]' hexadecimal2bg='bg-[#5f211e]' hexadecimal3bg='bg-[#320000]' corTexto1='text-zinc-100'
                                  corTexto2='text-zinc-100' corTexto3='text-zinc-100' /></>
        }
      />
    </>
  );
}
