import CardShow from '../CardShow'

export default function Agenda() {
  return (
    <>
      <div className="flex items-center justify-center mt-14 w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full mx-5 md:mx-0">
          <CardShow />
        </div>
      </div>
    </>
  )
}
