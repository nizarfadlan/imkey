import Image from 'next/image'
import { useState } from 'react'

const BlurImageFill = (props) => {

  const [loaded, setLoaded] = useState(false)

  return <Image
            className={`object-cover ${props.style} ${loaded ? 'ublur' : ''}`}
            loading="lazy"
            layout="fill"
            objectFit="cover"
            src={props.srcImage}
            alt={props.title}
            onLoadingComplete={() => setLoaded(true)}
          />
}

export default BlurImageFill
