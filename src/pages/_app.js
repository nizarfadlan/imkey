import '@/styles/globals.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

NProgress.configure({ showSpinner: false })
NProgress.configure({ easing: 'ease in out', speed: 500 })
NProgress.configure({ trickleSpeed: 800 })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />
}

export default MyApp
