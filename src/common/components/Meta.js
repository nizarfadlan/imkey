import { data } from '@/components/data'

function Meta({
  title='',
  excerpt='',
  cover='',
  slug=''
}) {
  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/png" sizes="192x192"  href="/images/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
      <meta name="description" content={excerpt || data.desc} />
      <meta name="theme-color" content={data.theme} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || data.name} />
      <meta property="og:site_name" content={data.name} />
      <meta property="og:description" content={excerpt || data.desc} />
      <meta property="og:url" content={`${data.link}/${slug}`} />
      <meta property="og:image" content={cover || data.icon} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || data.name} />
      <meta name="twitter:descripton" content={excerpt || data.desc} />
      <meta name="twitter:url" content={`${data.link}/${slug}`} />
      <meta name="twitter:image" content={cover || data.icon} />

      <link itemProp="thumbnailUrl" href={cover || data.icon} />
      <link rel="manifest" href="/manifest.json" />
      <meta name="keywords" content={`IMKEY Jogja, IMKEY, Kendal, Mahasiswa Kendal, Mahasiswa Jogja, Mahasiswa, Jogja, ${title}`} />
      <link rel="author" href="Nizar" />
      <link rel="canonical" href={`${data.link}/${slug}`} />

      <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
      <meta name="apple-mobile-web-app-status-bar" content={data.theme} />

      <meta name="application-name" content={data.name} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title || data.name} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileImage" content="/images/icons/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content={data.theme} />
      <meta name="msapplication-tap-highlight" content="no" />
    </>
  )
}

export default Meta;
