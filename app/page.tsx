import LeftSide from '@/components/left-side'
import RightSide from '@/components/right-side'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col xl:flex-row flex-1 h-full w-full gap-6 xl:gap-10">
      {/* {Left Side} */}
      <LeftSide />
      {/* {Right Side} */}
      <RightSide />
      <div className="flex xl:hidden px-8 pb-10 w-full">
        <Footer />
      </div>
    </main>
  )
}
