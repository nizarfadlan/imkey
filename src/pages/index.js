import RootLayout from '@/app/layout'
import Divisi from '@/components/Root/Divisi'
import Header from '@/components/Root/Header'
import Hero from '@/components/Root/Hero'
import BlurImage from '@/components/BlurImage'
import { useRef } from 'react'
import Agenda from '@/components/Root/Agenda'
import Pengurus from '@/components/Root/Pengurus'

export default function Home() {
  const aboutRef = useRef(null)

  return (
    <RootLayout>
      <section id="home" className="hero relative bg-white pt-24 lg:pt-18 mb-20 h-full overflow-hidden">
        <Hero servicesRef={aboutRef} />
      </section>
      <section id="divisi" className="mt-28 mb-16 mx-6 md:mx-24 lg:mx-36">
        <Header title="Divisi Pada IMKEY" desc="Divisi yang ada dirancang untuk membantu mencapai suatu tujuan. Ada sejumlah divisi yang membantu kerja untuk menjapai tujuan program kerja." />
        <Divisi />
      </section>
      <section ref={aboutRef} id="aboutAndHistory" className="mt-28 mb-16 mx-6 md:mx-24 lg:mx-36">
        <Header tipe="1" title="Tentang dan Sejarah IMKEY" desc="Tentang IMKEY" />
        <div id="about">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center justify-between mt-10">
            <div className="w-full lg:w-7/12 px-4 mt-8 lg:mt-0 mr-10/12">
              <h1 className="font-bold text-xl mb-3">Tentang</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam deserunt quisquam exercitationem. Eum, praesentium dolorem odit eos sapiente nobis natus. Blanditiis quisquam minus nesciunt nobis ex deleniti accusantium quia?</p>
            </div>
            <div className="w-full lg:w-4/12">
              <BlurImage
                style="max-w-full rounded-lg mx-auto lg:mr-0 lg:ml-auto"
                width={420}
                height={420}
                srcImage="https://res.cloudinary.com/dgk0qcjjb/image/upload/v1633085281/nfitec/cover_blog_zma0mm.png"
                title="Tentang IMKEY"
              />
            </div>
          </div>
        </div>
        <div id="sejarah" className="mt-16 lg:mt-0">
          <div className="flex flex-wrap flex-col-reverse lg:flex-row-reverse items-center justify-between mt-14">
            <div className="w-full lg:w-7/12 px-4 mt-8 lg:mt-0">
              <h1 className="font-bold text-xl mb-3">Sejarah</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam deserunt quisquam exercitationem. Eum, praesentium dolorem odit eos sapiente nobis natus. Blanditiis quisquam minus nesciunt nobis ex deleniti accusantium quia?</p>
            </div>
            <div className="w-full lg:w-4/12 mr-10/12">
              <BlurImage
                style="max-w-full rounded-lg mx-auto lg:mr-0 lg:ml-auto"
                width={420}
                height={420}
                srcImage="https://res.cloudinary.com/dgk0qcjjb/image/upload/v1633085281/nfitec/cover_blog_zma0mm.png"
                title="Tentang IMKEY"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="proker" className="mt-28 mb-16 mx-6 md:mx-24 lg:mx-36">
        <Header tipe="2" title="Agenda & Program Kerja" desc="Agenda & Program Kerja yang telah dilaksanakan pada divisi yang terkait IMKEY." />
        <Agenda />
      </section>
      <section id="pengurus" className="mt-28 mb-16 mx-6 md:mx-24 lg:mx-36">
        <Header tipe="2" title="Pengurus" desc="Pengurus IMKEY periode 2021-2022." />
        <Pengurus />
      </section>
    </RootLayout>
  )
}
