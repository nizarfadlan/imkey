import { fadeInHidden } from '@/components/Variants'
import BlurImageFill from '../BlurImageFill'
import { motion } from 'framer-motion'

export default function BlogCard({ children }) {
  return (
    <>
      <div className="flex items-center justify-center mt-14 w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mx-5 md:mx-0">
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
            <div className="relative">
              <div className="h-60 md:h-56 w-full rounded-t-xl mb-3 relative bg-gray-200">
                <BlurImageFill
                  style="rounded-t-xl"
                  title="Agenda"
                  srcImage="https://res.cloudinary.com/dgk0qcjjb/image/upload/v1633085281/nfitec/cover_blog_zma0mm.png"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between px-5 py-1 pb-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <a className="text-gray-900 font-bold text-xl tracking-tight mt-1">
                    Title
                  </a>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[14px] font-normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veniam voluptas porro at autem dolore molestiae illum cum iusto? Perferendis, laboriosam pariatur quo cupiditate optio debitis atque. Tenetur, nostrum aliquid!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
