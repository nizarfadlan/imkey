import '@/styles/globals.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { Poppins, Inter } from '@next/font/google'

const inter = Inter({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--inter-font',
})

const poppins = Poppins({
  subsets: ['latin'],
  // weight: '100 900',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  variable: '--poppins-font',
})

NProgress.configure({ showSpinner: false })
NProgress.configure({ easing: 'ease in out', speed: 500 })
NProgress.configure({ trickleSpeed: 800 })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --poppins-font: ${poppins.style.fontFamily};
          --inter-font: ${inter.style.fontFamily};
        }
      `}</style>
      <AnimatePresence mode="wait" initial={false} className={poppins.className}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
