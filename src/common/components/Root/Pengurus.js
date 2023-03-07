import BlurImageFill from '../BlurImageFill'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'
import { fadeInHidden } from '@/components/Variants'
import { useState } from 'react'

export default function Pengurus() {
  const [selectedCardID, setSelectedCardID] = useState(null)

  return (
    <>
      <div className="flex items-center justify-center mt-14 w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mx-5 md:mx-0">
          <AnimateSharedLayout type="crossfade">
            <motion.div
              layoutId={1}
              key={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInHidden('up', 0.8, 0.1*1)}
              className="card-blog relative bg-white rounded-xl transition duration-700 ease-in-out w-full flex flex-col justify-between hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedCardID(1)}
            >
              <div className="relative flex justify-center items-center py-4">
                <div className="h-56 md:h-52 w-56 md:w-52 rounded-full relative bg-gray-200">
                  <BlurImageFill
                    style="rounded-full"
                    title="Agenda"
                    srcImage="https://res.cloudinary.com/dgk0qcjjb/image/upload/v1633085281/nfitec/cover_blog_zma0mm.png"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center px-5 py-1 pb-5">
                <a className="text-gray-900 font-bold text-xl tracking-tight mt-1">
                  Nama
                </a>
                <span className="text-[14px] font-normal mt-2">
                  Jabatan
                </span>
              </div>
            </motion.div>
            <AnimatePresence>
              {selectedCardID && (
                <div className="fixed z-50 backdrop-blur-md backdrop-brightness-[.3] w-screen h-screen top-0 left-0">
                  <button className="text-white text-3xl py-2 px-4 float-right mr-5 hover:text-primary3" onClick={() => setSelectedCardID(null)}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-fit pl-4 pr-8">
                    <motion.div layoutId={selectedCardID} className="w-full md:w-8/12 h-full md:h-11/12 mx-auto bg-white rounded-lg text-pb flex flex-col justify-between">

                      <div className="relative mb-5 mt-2 px-5">
                        <h4 className="font-bold text-2xl mb-2 text-primary">Title</h4>
                        <p>Deskripsi</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  )
}
