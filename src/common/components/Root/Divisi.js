export default function Divisi() {
  return (
    <>
      <div className="flex items-center justify-center mt-8 w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full mx-5 md:mx-0">
          <div className="relative bg-primary2-m/20 py-6 px-6 rounded-2xl w-full sm:w-64 my-4 hover:scale-95 transition-transform duration-300 ease-out">
            <div className="text-white text-2xl flex items-center w-fit rounded-xl py-3 px-3 shadow-xl bg-primary2">
              <i className="fa-solid fa-money-bill-trend-up"></i>
            </div>
            <div className="mt-10">
                <p className="text-xl font-semibold text-primary2">Ekonomi Kreatif</p>
                <div className="border-t border-primary2-m/40 my-3"></div>
                <ul className="list-disc ml-5 text-sm text-gray-800">
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
