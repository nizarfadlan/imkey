import HomeProvider from './providers/context'
import Overlay from './providers/overlay'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeProvider>
        <div className="relative top-0">
          <Overlay />
          <div className="relative top-0 left-0">
            <Navbar />
            <main>
              { children }
            </main>
            <Footer />
          </div>
        </div>
      </HomeProvider>
    </>
  )
}
