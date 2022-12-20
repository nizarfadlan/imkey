export default function Header ({ tipe, title, desc }) {
  return (
    <>
      {tipe == 1 ?
        <>
          <div className="max-w-md">
            <h1
              className="font-bold text-3xl md:text-4xl text-dark"
            >
              {title}
            </h1>
            <p
              className="text-sm font-medium mt-3 md:mt-4 text-gray-700"
            >
              {desc}
            </p>
          </div>
        </>
      :
        tipe == 2 ?
          <>
            <div className="mx-auto text-center">
              <h1
                className="font-bold text-3xl md:text-4xl text-dark"
              >
                {title}
              </h1>
              <p
                className="text-sm font-medium mt-3 md:mt-4 text-gray-700"
              >
                {desc}
              </p>
            </div>
          </>
        :
          <>
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
              <div className="max-w-sm">
                <h1
                  className="font-bold text-3xl md:text-4xl text-dark"
                >
                  {title}
                </h1>
              </div>
              <div className="max-w-md ml-0 lg:ml-auto mt-3 lg:mt-0">
                <p
                  className="text-sm font-medium text-gray-700"
                >
                  {desc}
                </p>
              </div>
            </div>
          </>
      }
    </>
  )
}
