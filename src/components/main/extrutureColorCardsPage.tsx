import { Nav } from '@/components/main/navBar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CardColors } from '@/components/main/cardColors';


interface ExtrutureProps{
    paletColors: React.ReactNode
}

export default function ExtruturePageCard(props: ExtrutureProps) {
  return (
    <>
      <main className="w-full h-[100vh] flex">
        <Nav/>
        <ScrollArea className='h-full w-full min-[320px]:py-[20px] overflow-hidden'>
          <section className='w-full h-full py-[50px] items-center justify-center flex
          lg:px-[20px]
          min-[320px]:px-[10px]'>
              <div className='grid gap-3
              min-[1250px]:grid-cols-4 min-[1250px]:grid-rows-3 min-[1250px]:gap-6 min-[1250px]:h-full
              md:grid-cols-2 md:grid-rows-6 md:gap-2 md:h-full'>
                {props.paletColors}
              </div>
          </section>
        </ScrollArea>     
      </main>
    </>
  );
}