import Provider from './providers/context'
import Overlay from './providers/overlay'
import Navbar from '@/components/Root/Navbar'
import Footer from '@/components/Root/Footer'
import { motion } from 'framer-motion'

export default function RootLayout({ children }) {
  return (
    <>
      <Provider>
        <div className="relative top-0">
          <Overlay />
          <div className="relative top-0 left-0 flex flex-col justify-between">
            <div className="mb-auto">
              <Navbar />
              <motion.main
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                { children }
              </motion.main>
            </div>
            <Footer />
          </div>
        </div>
      </Provider>
    </>
  )
}
